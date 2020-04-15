// DO NOT import any functions from this file in your
// own code, they're implementation details of the library
// and can be removed without notice.

const R = require('ramda');

// RFC3339
const verificationDateNotKnown = new Date(0).toISOString();

module.exports.processUserFields = function(user_identity) {
  if (!user_identity) {
    return {};
  }

  const user = ['email_address', 'phone_number', 'legal_name']
    .reduce((user, f) => (
      R.merge(user, processField(f, user_identity[f] || {}))
    ), {});

  if (Object.keys(user).length === 0) {
    return {};
  }

  return {user};
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

