/**
 * Defaults for Client Initialization
 * @type {Object}
 */
module.exports = {

  /**
   * Uses this host to send messages to
   * @type {String}
   */
  protocol: 'https://',

  /**
   * Uses this host to send messages to
   * @type {String}
   */
  host: 'tartan.plaid.com',

  /**
   * URL endpoints
   * @type {String}
   */
  endpoint: {
    get: {
      method: 'GET',
      route: 'connect'
    },
    submit: {
      method: 'POST',
      route: 'connect'
    },
    step: {
      method: 'POST',
      route: 'connect/step'
    },
    remove: {
      method: 'DELETE',
      route: 'connect'
    }
  }

};
