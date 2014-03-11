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

  if (!credentials || typeof(credentials)!= 'object') {
      throw new Error('[plaid]#connect: credentials must be an object');
  }

  if(!callback && (typeof options ==='function')) {
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

  this.options     = options;
  this.credentials = credentials;
  this.type        = type;
  this.email       = email;

  // No access token or mfa for a connect.
  if (this.access_token)
    this.access_token = null;
  if (this.mfa)
    this.mfa = null;

  return this._exec('submit', callback);
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

  this.options      = options;
  this.access_token = access_token;
  this.mfa          = mfa;

  return this._exec('step', callback);
};

Client.prototype.get = function(access_token, options, callback) {
  this._checkInitialized();

  if(!callback && typeof(options) == 'function') {
    callback = options;
    options = {};
  }

  this.options = options;

  this.access_token = access_token;

  return this._exec('get', callback);
};

Client.prototype.remove = function(access_token, options, callback) {
  this._checkInitialized();

  if(!callback && typeof(options) == 'function') {
    callback = options;
    options = {};
  }

  this.options = options;

  this.access_token = access_token;

  return this._exec('remove', callback);
};

Client.prototype._exec = function (method, callback){

  var uri = this.config.protocol + this.config.host + '/' + this.config.endpoint[method].route;

  var query = {
      client_id   : this.client_id
    , secret      : this.secret
    , credentials : JSON.stringify(this.credentials)
    , type        : this.type
    , email       : this.email
    , access_token: this.access_token
    , options     : JSON.stringify(this.options)
    , mfa         : this.mfa
  };

  // the login option has to be set a separate parameter
  if (this.options.login) {
    query.login = this.options.login;
  }

  uri += "?"+qs.stringify(query);

  var self = this;

  request(
    { method: this.config.endpoint[method].method
    , uri: uri
    //, qs : qs.stringify(query)
    }
  , function (error, response, body) {
      if(!response) response = {};
      if(error || ( response.statusCode > 299 ) )
        return self._handleError(error, response.statusCode, body, callback);

      self.body = body;
      return self._handleSuccess(callback);

    }
  );
};

Client.prototype._handleSuccess = function(callback){
  try{
    this.body = JSON.parse(this.body);
  }catch(err){
    return callback("Couldn't parse body");
  }

  if(this.body.status === 'MFA')
    return this._handleMFA(callback);

  return callback(null, this.body, (typeof this.body.mfa !== 'undefined'));
};

Client.prototype._handleError = function(error, status, body, callback){
  if(error)
    return callback(error);

  try{
    body = JSON.parse(body);
  }catch(err){
    return callback("Couldn't parse body");
  }

  return callback(body);
};

Client.prototype._handleMFA = function(callback){

  this.config.endpoint  = '/connect/submit/step';
  this.access_token     = this.access_token   || this.body.accessToken;
  this.options.itemID   = this.options.itemID || this.body.message.itemID;

  var self = this;
  //helper
  var step = function(credentials, callback){
    if(self.options.mfaCL)
      return self._mfaCL(credentials, callback);
    return self.connect(credentials, self.type, self.email, self.options, callback);
  };
  var html = function(){
    return self._formToHTML(self.body.message.form);
  };

  this.body.message.step = step;
  if(this.body.message.form)
    this.body.message.form.html = html;
  else
    console.log(this.body.message);

  return callback(null, this.body, true);
};

/* MFA testing CL */

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
  };

  var self = this;
  async.forEachSeries(holder, read, function(err, result){

    //Closing the readline interface
    rl.close();
    self.credentials = credentials;

    return self.connect(self.credentials, self.type, self.email, self.options, callback);
  });
};

Client.prototype._formToHTML = function(raw){
  var form = {};

  for(i in raw){
    if(raw[i].type=='text')
      form[raw[i].display]=fields.string();
  }

  var form = forms.create(form).toHTML();

  return '<form>'+form+'</form>';

};
