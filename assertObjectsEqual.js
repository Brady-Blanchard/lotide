// function for testing the equality of arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // if arrays don't have the same length
    return false; // return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { // if arrays don't have the same elements
      return false; // return false
    }
  }
  return true; // if none of those happen return true
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // initializes two variables that stores an array of keys in object
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) { // if the keys array are not the same length return false
    return false;
  }
  for (const key of keys1) { // loops through the keys1 array
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) { // if object1 and object2 key are an array then run next if
      if (eqArrays(object1[key],object2[key])) { // if both the arrays are equal then return true
        return true;
      }
    } else if (object1[key] !== object2[key]) { // otherwise if object1 key does not equal object2 key
      return false; // return false
    }
  }
  return true; // if none of these conditions are met return true
};

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