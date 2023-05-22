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

// function that puts all letter positions from a given sentence into an object
const letterPostitions = function(sentence) {
  // initialize an object to return and an index variable
  const results = {};
  let index = 0;
  // loops over a string to get each letter
  for (const letter of sentence) {
    // skips spaces
    if (letter !== " ") {
      // if letter exists in results than push the index to the array
      if (results[letter]) {
        results[letter].push(index);
      // otherwise initialize the letter array
      } else {
        results[letter] = [index];
      }
    }
    //increment the index by 1
    index += 1;
  }

  return results;
};

// TEST CODE
const test1 = letterPostitions("hello");

console.log(test1);

assertArraysEqual(test1["h"], [0]); // => should PASS
assertArraysEqual(test1["e"], [1]); // => should PASS
assertArraysEqual(test1["l"], [2, 3]); // => should PASS
assertArraysEqual(test1["o"], [4]); // => should PASS