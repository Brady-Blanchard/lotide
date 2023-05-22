// require the chai assert func and flatten function
const assert = require('chai').assert;
const flatten = require('../flatten');

// TEST CODE
describe("#flatten", () => {
  //ensures array of arrays returns a single array with all elements
  it("returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6]])", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});