Plaid node.js client
==============

![alt text](https://circleci.com/gh/plaid/plaid-node.png?circle-token=2efcf082d8df7e119325a4dbed9a1091ff5db422)


plaid-node is a node.js client for [Plaid](https://plaid.com)

## Documentation
Documentation is available at [https://plaid.com/docs](https://plaid.com/docs).

## Install
    npm install plaid

## Examples
```javascript
var plaid = require('plaid')({client_id: 'test_id', secret: 'test_secret'});

/**
 * Connect/Add a user.
 */
plaid.connect({username: 'plaid_test', password: 'plaid_good'}, 'bofa', 'user@example.com', function(error, response, mfa){

	//Non MFA
	console.log(response)

	//MFA
	if (mfa) {
		var answer_question = 'tomato';
		plaid.step(response.access_token, answer_question, function(err, response){
			//response is accounts and transactions object
		})
	}
});

/**
 * Get a user's transactions, using the access_token
 */
plaid.get(access_token, function(err, res) {
  console.log('Accounts : ', res.accounts);
  console.log('Transactions : ', res.transactions);
});
```

## Test
To run the tests, you need to :
  - [Sign up](https://plaid.com/signup) for a key
  - If no keys are provided, the default sandbox only keys will be used
```
export PLAID_CLIENTID=123456
export PLAID_SECRET=7890
```

```
npm test
```

Tests are written for these institutions:
 - amex
 - bofa
 - citi
 - wells
 - chase
 - us
 - usaa

## License
[MIT](https://github.com/plaid/plaid-node/blob/master/LICENSE)
