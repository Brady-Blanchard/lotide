// function for removing elements in an array
const without = function(source, itemsToRemove) {
  const newArray = []; // initialize a new array
  for (let i = 0; i < source.length; i++) { // loop through the source array
    if (itemsToRemove.includes(source[i]) === false) { //if the element is not in the itemsToRemove array
      newArray.push(source[i]);
    }
  }
  return newArray;
};

// EXPORT FUNCTION
module.exports = without;