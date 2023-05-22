// function that puts all letter positions from a given sentence into an object
const letterPositions = function(sentence) {
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

module.exports = letterPositions;