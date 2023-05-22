// require the chai assert func and middle function
const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE
describe("#middle", () => {
  // ensure we get back an empty array for arrays with 2 or less elements
  it("returns [] for middle([1])", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for middle([1, 2])", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  // ensure we get the middle element of each odd numbered arrays
  it("returns [2] for middle([1, 2, 3])", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for middle([1, 2, 3, 4, 5])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  // ensure we get the two middle elements of each even numbered arrays
  it("returns [2, 3] for middle([1, 2, 3, 4])", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for middle([1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
});