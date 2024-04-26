import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import NumbersValidator from '../app/numbers_validator.js';

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('returns true if all elements are numbers', () => {
    const arrOfNums = [4, 3, 2];
    expect(validator.isAllNumbers(arrOfNums)).to.be.equal(true);
  });

  it('returns false if not all elements are numbers', () => {
    const arrOfNums = [4, '3', 2];
    expect(validator.isAllNumbers(arrOfNums)).to.be.equal(false);
  });

  it('throws an error if input is not an array', () => {
    const invalidInput = 'input';
    expect(() => validator.isAllNumbers(invalidInput)).to.throw(
      `[${invalidInput}] is not an array`,
    );
  });
});
