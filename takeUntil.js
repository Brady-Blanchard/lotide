// function that takes in an array and a callback func
// returns an array that is pushed to from the original array until the callback provided is true
const takeUntil = function(array, callback) {
  let newArr = []; // initializes new array
  for (let element of array) { // loops over elements in array given
    if (!callback(element)) { // if callback func returns falsy push to newArr
      newArr.push(element);
    } else { // otherwise return the newArr
      return newArr;
    }
  }
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // should PASS

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // should PASS