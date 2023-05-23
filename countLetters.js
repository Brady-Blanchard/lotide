// this function counts each letter in a string and returns them to an object
const countLetters = function(sentence) {
  // initializing object to return
  const letters = {};
  
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

// EXPORT FUNCTION
module.exports = countLetters;