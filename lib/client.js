var _         = require('underscore')
  , request   = require('request')
  , qs        = require('querystring')
  , defaults  = require('./defaults');


/*
TODO

Getting options from multiple functions

Handle MFA
  have testing feature with commandline enter
  User built in funcitions like that ironio one
  Have built in convert to HTML forms
*/



/**
 * Plaid.io node client driver
 *
 * @param  {Object} options
 *   @param  {String} client_id     - Plaid.io "client_id" 
 *   @param  {String} secret        - Plaid.io "secret" 
 *
 */
var Client = module.exports = function (options) {

  this.initialized = false;

  if (options) this.init(options);
};

/**
 * Initializes this client.
 *
 * @param  {Object} options
 *   @param  {String} client_id     - Plaid.io "client_id" 
 *   @param  {String} secret        - Plaid.io "secret" 
 *
 */
Client.prototype.init = function (options) {

  if (options.secret.length<0 ||  options.client_id.length<0)
      throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');

  if (typeof(options.secret)!='string' ||  typeof(options.client_id)!='string')
      throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');

  this.secret      = options.secret;
  this.client_id   = options.client_id;
  this.options     = _.defaults(options || {}, defaults);

  this.initialized = true;
};


/**
 * Internal method to check whether the client has been initialized.
 * @private
 */
Client.prototype._checkInitialized = function () {
  if (!this.initialized)
    throw new Error('analytics-node client is not initialized. Please call ' +
                    'client.init(options).');
};


/**
 * Connect a card to the Plaid API
 *
 *
 * @param  {Object} credentials     - The credentials for that card
 *   @param  {String}   username    - id for logged in user
 *   @param  {Password} password    - key/value object of tags for the user (optional)
     ...
 *
 * @param  {Object}  options   - app provided context about the user (optional)
 *
 * @callback {Error, Object, Object}
 *
 */
Client.prototype.connect = function (credentials, type, email, options, callback) {

  this._checkInitialized();

  if (!credentials || typeof(credentials)!= 'object') {
      throw new Error('[plaid]#connect: credentials must be an object');
  }

  if(!callback && typeof(options)=='function'){
    callback = options;
    options  = {};
  }

  if(!type || typeof(type)!='string'){
    throw new Error('[plaid]#connect: Type missing or invalid');
  }

  if(!email || typeof(email)!='string'){
    throw new Error('[plaid]#connect: Email missing or invalid');
  }

  if(!callback){
    callback = function(){};
  }

  this.credentials = credentials;
  this.type        = type;
  this.email       = email;

  return this._exec(callback);
};


Client.prototype._exec = function (callback){

  var uri = this.options.protocol + this.options.host + this.options.endpoints.connect;

  var query = {
      client_id   : this.client_id
    , secret      : this.secret
    , credentials : JSON.stringify(this.credentials)
    , type        : this.type
    , email       : this.email
    //, options     : JSON.stringify(this.options)
  }

  uri += "?"+qs.stringify(query);

  request(
    { method: 'POST'
    , uri: uri
    //, qs : qs.stringify(query)
    }
  , function (error, response, body) {
      if(error || response.statusCode != 200)
        return this._handleError(error, response, body, callback);

      this.body = body;
      return this._handleSuccess(callback);
    
    }
  )
}

Client.prototype._handleSuccess = function(body, callback){
  try{
    body = JSON.parse(body);
  }catch(err){
    return callback("Couldn't parse body");
  }
  if(body.status === 'mfa')
    return this._handleMFA(body, callback);

  if(!body.success)
    return callback(body.error)

  return callback(null, body, false);
}

Client.prototype._handleError = function(error, response, body, callback){
  if(error)
    return callback(error)

  if(response.status!=400 || !body)
    return callback("Unknown error occured", body);

  try{
    body = JSON.parse(body);
  }catch(err){
    return callback("Couldn't parse body");
  }
  
  return callback(body.error, body);
}





