// require function for testing the equality of arrays
const assertArraysEqual = require('./assertArraysEqual');

// function for removing elements in an array
const without = function(source, itemsToRemove) {
  let newArray = []; // initialize a new array
  for (let i = 0; i < source.length; i++) { // loop through the source array
    if (itemsToRemove.includes(source[i]) === false) { //if the element is not in the itemsToRemove array
      newArray.push(source[i]);
    }
  }
  return console.log(newArray);
};


// TEST CODE
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);