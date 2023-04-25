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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr1) {
  let newArray = [];
  if (arr1.length === 1 || arr1.length === 2) {
    return newArray;
  } else if (arr1.length % 2 === 1) {
    let half = Math.floor(arr1.length / 2);
    newArray.push(arr1[half]);
    return newArray;
  } else if (arr1.length % 2 === 0) {
    let half = Math.floor(arr1.length / 2);
    newArray.push(arr1[half - 1]);
    newArray.push(arr1[half]);
    return newArray;
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);