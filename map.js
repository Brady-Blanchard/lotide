// require function for testing the equality of arrays
const assertArraysEqual = require('./assertArraysEqual');

// takes an array and a callback function
// returns a new array based on the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
assertArraysEqual(results1, ['g','c','t','m','t']); // should PASS
assertArraysEqual(results2, [6, 7, 2, 5, 3]); // should PASS
assertArraysEqual(results2, [6, 7, 2, 5, 11]); //should FAIL