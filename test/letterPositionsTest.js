// require the chai assert func and letterPositions function
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// TEST CODE
// putting the result of letterPositions function in a variable
const test1 = letterPositions("hello");

describe("#letterPositions", () => {
  it("returns [0] for test1['h']", () => {
    assert.strictEqual(test1["h"], [0]);
  });
  it("returns [1] for test1['e']", () => {
    assert.deepEqual(test1["e"], [1]);
  });
  //ensures it lists both indexs
  it("returns [2, 3] for test1['l']", () => {
    assert.deepEqual(test1["l"], [2, 3]);
  });
  it("returns [4] for test1['o']", () => {
    assert.deepEqual(test1["o"], [4]);
  });
});