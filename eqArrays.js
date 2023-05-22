// function for testing the equality of arrays
const eqArrays = function(arr1, arr2) {
  // if arrays don't have the same length return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // if arrays don't have the same elements return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // if none of those happen return true
  return true;
};

// EXPORT FUNCTION
module.exports = eqArrays;