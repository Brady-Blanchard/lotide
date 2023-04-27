// function for testing the equality of arrays
const eqArrays = function(arr1, arr2) {
  // if arrays don't have the same length return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //if arrays don't have the same values return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  //if none of those happen return true
  return true;
};

// function for asserting two arrays equality
const assertArraysEqual = function(actual, expected) {
  // if equality is true then output to console assertion passed 
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  // otherwise output to console assertion failed
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
