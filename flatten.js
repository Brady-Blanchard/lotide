// takes an array of arrays and returns a singular array with all elements
const flatten = function(arr1) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      for (let j = 0; j < arr1[i].length; j++) {
        newArray.push(arr1[i][j]);
      }
    } else {
      newArray.push(arr1[i]);
    }
  }
  return newArray;
};

// EXPORT FUNCTION
module.exports = flatten;