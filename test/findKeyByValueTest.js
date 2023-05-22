// require the chai assert func and findKeyByValue function
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// TEST CODE
// object to use in findKeyByValue function
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  // ensures it returns undefined if the key value doesn't exist 
  it(`returns undefined for findKeyByValue(bestTVShowsByGenre, "That '70s Show")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  // ensures the key is it found by the value
  it(`returns drama for tfindKeyByValue(bestTVShowsByGenre, "The Wire")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});