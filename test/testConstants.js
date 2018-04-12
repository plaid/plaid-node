'use strict';

module.exports = {
  USERNAME: 'user_good',
  PASSWORDS: {
    GOOD: 'pass_good',
    MFA_SELECTIONS: 'mfa_selections',
    MFA_DEVICE: 'mfa_device',
    MFA_QUESTIONS_1_1: 'mfa_questions_1_1',
    MFA_QUESTIONS_2_2: 'mfa_questions_2_2',
    INVALID: 'error_INVALID_CREDENTIALS',
    LOGIN_REQUIRED: 'error_ITEM_LOGIN_REQUIRED',
  },
  INSTITUTION: 'ins_109508',
  PRODUCTS: ['transactions', 'auth', 'assets'],
  MFA_RESPONSES: {
    DEVICE: ['1234'],
    QUESTIONS_1_1: [
      ['answer_0_0']
    ],
    QUESTIONS_2_2: [
      ['answer_0_0', 'answer_0_1'],
      ['answer_1_0', 'answer_1_1']
    ],
    SELECTIONS: ['tomato', 'ketchup'],
  }
};
