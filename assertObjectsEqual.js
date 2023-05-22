// functions for testing the equality of arrays and objects
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // gets the util.inspect function
  // if equality is true then output to console assertion passed
  if (eqObjects(inspect(actual), inspect(expected))) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  // otherwise output to console assertion failed
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
assertObjectsEqual({ test: 1, arr1: ['1', '2', '3'] }, { test: 1, arr1: ['1', '2', '3'] }); // should PASS
assertObjectsEqual({ test: 1, arr1: ['1', '3', '4'] }, { test: 1, arr1: ['1', '2', '3'] }); // should FAIL
assertObjectsEqual({ test: 1 }, { test: 1 }); // should PASS
assertObjectsEqual({ test: 1 }, { test: 2 }); // should FAIL