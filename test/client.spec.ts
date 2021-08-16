import 'mocha';
import { expect } from 'chai';
import { Configuration, PlaidApi, PlaidEnvironments } from '../dist';

describe('PlaidApi', () => {
  describe('constructor', () => {
    it('succeeds with base path arguments', () => {
      expect(() => {
        new PlaidApi(
          new Configuration({
            basePath: PlaidEnvironments.sandbox,
          }),
        );
      }).not.to.throw();
    });
  });
});