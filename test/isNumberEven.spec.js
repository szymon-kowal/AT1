import NumbersValidator from '../app/numbers_validator.js'
import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'

describe('isNumberEven', function () {
  let validator

  beforeEach(function () {
    validator = new NumbersValidator()
  })

  afterEach(function () {
    validator = null
  })

  // isNumberEven(int)

  it('should return true if number is even', function () {
    expect(validator.isNumberEven(4)).to.be.equal(true)
  })

  it('should provide an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4')
    }).to.throw('[4] is not of type "Number" it is of type "string"')
  })
  // isAllNumber(array: int[])
})
