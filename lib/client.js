var _         = require('underscore')
  , sugar     = require('sugar')
  , request   = require('request')
  , events    = require('events')
  , qs        = require('querystring')
  , defaults  = require('./defaults');


/*
TODO

Getting options from multiple functinos

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
  else{
    throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');
  }
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

  if (options.secret.length>0 ||  options.client_id.length>0)
      throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');

  if (typeof(options.secret)!='string' ||  typeof(options.client_id)!='string')
      throw new Error('plaid-node client must be initialized with a '+
                    'non-empty API "secret" and "client_id" parameter.');

  this.secret      = options.secret;
  this.client_id   = options.secret;
  this.options     = _.defaults(options || {}, defaults);

  this.initialized = true;

  this.emit('initialize');
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
Client.prototype.connect = function (credentials, options, callback) {

  this._checkInitialized();

  if (!credentials || typeof(credentials)!= 'object') {
      throw new Error('[plaid]#connect: credentials must be an object');
  }

  if(!callback && typeof(options)=='function'){
    callback = options;
    options  = {};
  }

  if(!callback){
    callback = function(){};
  }

  this.credentials = credentials;

  return this._exec(callback);
};


Client.prototype._exec = function (callback){

  var uri = this.options.protocol + this.options.host + this.options.endpoint;

  var query = {
      client_id   : this.client_id
    , secret      : this.secret
    , credentials : JSON.stringify(this.credentials)
    , options     : JSON.stringify(this.options)
  }

  request(
    { method: 'POST'
    , uri: uri
    , qs : qs.stringify(query)
  , function (error, response, body) {
      if(response.statusCode == 201){
        console.log('document saved as: http://mikeal.iriscouch.com/testjs/'+ rand)
      } else {
        console.log('error: '+ response.statusCode)
        console.log(body)
      }
    }
  )
}





