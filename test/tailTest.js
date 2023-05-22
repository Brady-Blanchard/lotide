// require the chai assert func and tail function
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe("#tail", () => {
  // ensure we get back two elements
  it("returns 2 for result.length", () => {
    assert.deepEqual(result.length, 2);
  });
  // ensure first element is "Lighthouse"
  it("returns 'lighthouse' for result[0]", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });
  // ensure second element is "Labs"
  it("returns 'labs' for result[1]", () => {
    assert.deepEqual(result[1], 'Labs');
  });
  // original array should still have 3 elements!
  it("returns 3 for words.length", () => {
    assert.deepEqual(words.length, 3);
  });
});