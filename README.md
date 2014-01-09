plaid-node
==============

<!--[![Build Status](https://travis-ci.org/plaid/plaid-node.png)](https://travis-ci.org/plaid/plaid-node) -->


plaid-node is a node.js client for [Plaid.io](https://plaid.io)

## Documentation

Documentation is available at [https://plaid.io/docs](https://plaid.io/docs).

## Install
    npm install plaid

## Examples
```javascript
var plaid = require('plaid')({client_id: '123456', secret: '7891011'});

/**
 * Connect/Add a user.
 */
plaid.connect({username: 'demo', password: 'test'}, 'amex', 'w@plaid.io', function(error, response, mfa){
	
	//Non MFA
	console.log(response)

	//MFA
	if (mfa) {
		var answer_question = "this is my answer";
		response.step(response.access_token, answer_question, function(err, response){
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
  - [apply](https://plaid.io/signup) for a key
  - set the user bank information into process variables
The tests work only for a 'bofa' account so far.
You'll have to provide the answer to a secret question during the tests to validate the connection to the bank.
```
export PLAID_CLIENTID=123456
export PLAID_SECRET=7890
export PLAID_USER_USERNAME=username
export PLAID_USER_PASSWORD=pass
export PLAID_USER_TYPE=bofa
export PLAID_USER_EMAIL=email@plaid.io
```

```
npm test
```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

(The MIT License)

Copyright (c) 2013 Plaid Technologies <william@plaid.io>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
