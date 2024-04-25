import NumbersValidator from '../app/numbers_validator.js'
import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'

describe('isInteger', () => {
  let validator
  beforeEach(() => {
    validator = new NumbersValidator()
  })
  afterEach(() => {
    validator = null
  })
  it('returns true if number is valid integer', () => {
    expect(validator.isInteger(1)).to.be.equal(true)
  })
  it('returns false if number is not valid integer', () => {
    expect(validator.isInteger(1.23)).to.be.equal(false)
  })
  it('throws error if input is not a number', () => {
    const invalidInput = 'Something'
    expect(() => validator.isInteger(invalidInput)).to.throw(
            `[${invalidInput}] is not a number`
    )
  })
})
