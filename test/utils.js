module.exports = {

  getKeys: function() {
    var client_id = process.env.PLAID_CLIENTID
    	, secret		= process.env.PLAID_SECRET
    	;

    return {
    		client_id : client_id
    	, secret    : secret
    };
  },

  getUser: function() {
    return {
    		username : process.env.PLAID_USER_USERNAME
    	, password : process.env.PLAID_USER_PASSWORD
    	, type     : process.env.PLAID_USER_TYPE
    	, email    : process.env.PLAID_USER_EMAIL
    };
  },

}