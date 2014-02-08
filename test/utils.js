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
}
