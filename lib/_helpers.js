// DO NOT import any functions from this file in your
// own code, they're implementation details of the library
// and can be removed without notice.

const R = require('ramda');

// RFC3339
const verificationDateNotKnown = new Date(0).toISOString();

module.exports.processUserFields = function(user) {
  if (!user) {
    return {};
  }

  const userIdentityFields = [
    'email_address',
    'phone_number',
    'legal_name',
  ];

  const {client_user_id} = user;
  const base = client_user_id == null ? {} : {client_user_id};

  const userForAPI = R.merge(
    base,
    userIdentityFields
      .reduce((userForAPI, f) => (
        R.merge(userForAPI, processField(f, user[f] || {}))
      ), {})
  );

  if (Object.keys(userForAPI).length === 0) {
    return {};
  }

  return {user: userForAPI};
};

function processField(name, {value, verified, verified_at: verifiedAt}) {
  if (typeof value !== 'string') {
    return;
  }

  if (verifiedAt != null && verified != null) {
    throw Error('createItemAddToken accepts only one of verified' +
      ' and verified_at');
  }

  if (verifiedAt) {
    return {
      [name]: value,
      [`${name}_verified_time`]: verifiedAt.toISOString(),
    };
  }

  if (verified) {
    return {
      [name]: value,
      [`${name}_verified_time`]: verificationDateNotKnown,
    };
  }

  return {
    [name]: value
  };
}
