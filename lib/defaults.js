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
  host            : 'tartan.plaid.com',
  
  /**
   * URL endpoints (including version)
   * @type {String}
   */
  endpoint : {
    'connect' : '/connect',
    'step'    : '/connect/step',
    'entity'  : '/entity'
  }
  
};
