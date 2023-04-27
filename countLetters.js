// asssertion function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// this function counts each letter in a string and returns them to an object
const countLetters = function(sentence) {
  // initializing object to return
  let letters = {};
  
  // loops over each letter in sentence
  for (const letter of sentence) {
    // if a character is not a space character do this
    if (letter !== " ") {
      // if the letter already exists in letters increment it by 1
      // else initialize it to 1
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
  }
  
  return letters;
};

// TEST CODE

const result1 = countLetters("test 1");
const result2 = countLetters("Test 2");
const result3 = countLetters("Lighthouse Labs");

console.log(result1);
console.log(result2);
console.log(result3);

assertEqual(result1["1"], 1);
assertEqual(result2["T"], 1);
assertEqual(result3["L"], 2);