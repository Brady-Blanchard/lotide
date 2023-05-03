// takes an array and a callback function
// returns a new array based on the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// function for testing the equality of arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// function for asserting two arrays equality
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
assertArraysEqual(results1, ['g','c','t','m','t']); // should PASS
assertArraysEqual(results2, [6, 7, 2, 5, 3]); // should PASS
assertArraysEqual(results2, [6, 7, 2, 5, 11]); //should FAIL