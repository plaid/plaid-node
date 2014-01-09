/**
 * Defaults for Client Initialization
 * @type {Object}
 */
module.exports = {

  /**
   * Uses this host to send messages to
   * @type {String}
   */
  protocol        : 'https://',

  /**
   * Uses this host to send messages to
   * @type {String}
   */
  host            : 'api-dev.plaid.io/v2',

  /**
   * URL endpoints (including version)
   * @type {String}
   */
  endpoint : {
    'get'    : '/connect/get',
    'submit' : '/connect/submit',
    'step'   : '/connect/step',
    'remove' : '/connect/remove'
  }

};