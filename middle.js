// function that takes in an array and returns the middle
const middle = function(arr1) {
  let newArray = []; // initialize new array
  if (arr1.length === 1 || arr1.length === 2) { // if the length of arr1 is 1 or 2 return empty array
    return newArray;
  } else if (arr1.length % 2 === 1) { // otherwise if arr1 is odd
    let centre = Math.floor(arr1.length / 2); // calculates the centre
    newArray.push(arr1[centre]); // push the centre element of arr1 into new array
    return newArray; // returns newArray
  } else if (arr1.length % 2 === 0) { // otherwise if arr1 is even
    let centre = Math.floor(arr1.length / 2); // calculates the centre
    newArray.push(arr1[centre - 1]); // pushes both middle elements from arr1 to newArray
    newArray.push(arr1[centre]);
    return newArray; // returns newArray
  }
};

// EXPORT FUNCTION
module.exports = middle;