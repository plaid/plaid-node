var _         = require('underscore')
  , async     = require('async')
  , request   = require('request')
  , qs        = require('querystring')
  , defaults  = require('./defaults')
  , forms     = require('forms')
  , fields    = forms.fields;


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
 * @param  {Object} config
 *   @param  {String} client_id     - Plaid.io "client_id" 
 *   @param  {String} secret        - Plaid.io "secret" 
 *
 */
var Client = module.exports = function (config) {

  this.initialized = false;

  if (config) this.init(config);
};

/**
 * Initializes this client.
 *
 * @param  {Object} config
 *   @param  {String} client_id     - Plaid.io "client_id" 
 *   @param  {String} secret        - Plaid.io "secret" 
 *
 */
Client.prototype.init = function (config) {

  if (config.secret.length<0 ||  config.client_id.length<0)
      throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');

  if (typeof(config.secret)!='string' ||  typeof(config.client_id)!='string')
      throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');

  this.secret      = config.secret;
  this.client_id   = config.client_id;
  this.config     = _.defaults(config || {}, defaults);

  this.initialized = true;
};


/**
 * Internal method to check whether the client has been initialized.
 * @private
 */
Client.prototype._checkInitialized = function () {
  if (!this.initialized)
    throw new Error('analytics-node client is not initialized. Please call ' +
                    'client.init(config).');
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

  if(!callback && (typeof options ==='function')) {
    callback = options;
    options  = {};
  }

  if (!credentials || typeof(credentials)!= 'object') {
      throw new Error('[plaid]#connect: credentials must be an object');
  }

  if(!email || typeof(email)!='string'){
    throw new Error('[plaid]#connect: Email missing or invalid');
  }

  if(!type || typeof(type)!='string'){
    throw new Error('[plaid]#connect: Type missing or invalid');
  }

  if(!callback){
    callback = function(){};
  }

  var params = {
    credentials : JSON.stringify(credentials)
    , email       : email
    , type        : type
    , options     : JSON.stringify(options)
  };

  return this._exec('POST', 'connect', params, callback);
};

Client.prototype.step = function (access_token, mfa, options, callback) {

  this._checkInitialized();

  if(!callback && typeof(options)=='function'){
    callback = options;
    options  = {};
  }

  if(!callback){
    callback = function(){};
  }

  if(!access_token || typeof(access_token)!='string'){
    throw new Error('[plaid]#connect: Access token missing or invalid');
  }

  var params = {
    access_token : access_token
    , mfa          : mfa
    , options      : JSON.stringify(options)
  };

  return this._exec('POST', 'step', params, callback);
};

Client.prototype.get = function(access_token, options, callback) {
  this._checkInitialized();

  if(!callback && typeof(options) == 'function') {
    callback = options;
    options = {};
  }

  if(!access_token || typeof(access_token)!='string'){
    throw new Error('[plaid]#connect: Access token missing or invalid');
  }

  var params = {
    access_token : access_token
    , options      : JSON.stringify(options)
  };

  return this._exec('GET', 'connect', params, callback);
}

Client.prototype.remove = function(access_token, options, callback) {
  this._checkInitialized();

  if(!callback && typeof(options) == 'function') {
    callback = options;
    options = {};
  }

  if(!access_token || typeof(access_token)!='string'){
    throw new Error('[plaid]#connect: Access token missing or invalid');
  }

  var params = {
    access_token : access_token
  };

  return this._exec('DELETE', 'connect', params, callback);
}

Client.prototype.get_entity = function(entity_id, options, callback) {
  this._checkInitialized();

  if(!callback && typeof(options) == 'function') {
    callback = options;
    options = {};
  }

  if(!entity_id || typeof(entity_id)!='string'){
    throw new Error('[plaid]#connect: Entity ID missing or invalid');
  }

  var params = {
    id : entity_id
    , options   : JSON.stringify(options)
  };

  return this._exec('GET', 'entity', params, callback);
}

Client.prototype._exec = function (method, endpoint, params, callback){

  var uri = this.config.protocol + this.config.host + this.config.endpoint[endpoint];

  var query = {
    client_id   : this.client_id,
    secret      : this.secret
  }

  for( var property in params ) {
    query[property] = params[property];
  }

  var self = this;

  request(
    { method: method
      , uri: uri
      , form: query
    }
    , function (error, response, body) {
      if(!response) response = {};
      
      if(error || response.statusCode < 200 || response.statusCode >= 300)
        return self._handleError(error, response.statusCode, body, callback);
      
      self.body = body;

      return self._handleSuccess(callback);
    }
  )
}

Client.prototype._handleSuccess = function(callback){
  try{
    this.body = JSON.parse(this.body);
  }catch(err){
    return callback("Couldn't parse body");
  }

  return callback(null, this.body, (typeof(this.body.mfa) !== 'undefined'));
}

Client.prototype._handleError = function(error, status, body, callback){
  if(error)
    return callback(error)

  try {
    body = JSON.parse(body);
  } catch(err) {
    return callback("Couldn't parse body");
  }
	
  return callback(body.message || "Unknown error occured", body);
}

/* MFA testing CL */

// NOTE: what is this function used for? Can't find any tests for it.

Client.prototype._mfaCL = function(credentials, callback){
  var readline = require('readline');
  var credentials = {};

  //Making sure there is a valid form object
  if(this.body.message.form)
    var holder = this.body.message.form;
  else{
    return console.log("Unknown message");
  }

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //The function that is called for every question
  var read = function(question, cbk){
    var display = question.display + ": ";
    rl.question(display, function(answer) {
      credentials[display]=answer;
      return cbk();
    });
  }

  var self = this;
  async.forEachSeries(holder, read, function(err, result){

    //Closing the readline interface
    rl.close();
    self.credentials = credentials;

    return self.connect(self.credentials, self.type, self.email, self.options, callback);
  });
}

Client.prototype._formToHTML = function(raw){
  var form = {};

  for(i in raw){
    if(raw[i].type=='text')
      form[raw[i].display]=fields.string();
  }

  var form = forms.create(form).toHTML();

  return '<form>'+form+'</form>';

}
