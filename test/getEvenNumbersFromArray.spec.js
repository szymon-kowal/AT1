import NumbersValidator from '../app/numbers_validator.js'
import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'

describe('getEvenNumbersFromArray', function () {
  let validator

  beforeEach(function () {
    validator = new NumbersValidator()
  })

  afterEach(function () {
    validator = null
  })

  it('should return all even numbers in array', () => {
    const arrOfNums = [4, 3, 2]
    expect(validator.getEvenNumbersFromArray(arrOfNums)).to.be.eql([4, 2])
  })

  it('should provide an error when provided a strings in array', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([4, '3', '2'])
    }).to.throw('[4,3,2] is not an array of "Numbers"')
  })
})
