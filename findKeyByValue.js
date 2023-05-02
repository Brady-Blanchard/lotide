// assert the equality between two arguments
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// returns the first key from an object that matches val
const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj); // stores an array of obj keys in a variable
  for (const key of keys) { // loops through the keys
    if (obj[key] === val) { // if the value of obj[key] equals val
      return key; // return key
    }
  }
  return undefined; // return undefined if no key with val was found
};

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);