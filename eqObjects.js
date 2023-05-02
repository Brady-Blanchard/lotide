// assert the equality between two arguments
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function for testing the equality of arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // if arrays don't have the same length
    return false; // return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { // if arrays don't have the same elements
      return false; // return false
    }
  }
  return true; // if none of those happen return true
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // initializes two variables that stores an array of keys in object
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) { // if the keys array are not the same length return false
    return false;
  }
  for (const key of keys1) { // loops through the keys1 array
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) { // if object1 and object2 key are an array then run next if
      if (eqArrays(object1[key],object2[key])) { // if both the arrays are equal then return true
        return true;
      }
    } else if (object1[key] !== object2[key]) { // otherwise if object1 key does not equal object2 key
      return false; // return false
    }
  }
  return true; // if none of these conditions are met return true
};


// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);