// require the chai assert func and tail function
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// TEST CODE
describe("#eqArrays", () => {
  // ensure the arrays are equal with numbers 
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  // ensure the function returns false if not equal 
  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  // ensure that strings in arrays are equal
  it(`returns true for eqArrays(["1", "2", "3"], ["1", "2", "3"]`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  // ensure that numbers are strictly equal
  it(`returns false for eqArrays(["1", "2", "3"], ["1", "2", 3])`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});