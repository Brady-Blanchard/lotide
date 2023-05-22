// function for testing the equality of arrays
const eqArrays = require('./eqArrays')

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

// EXPORT FUNCTIONS
module.exports = eqObjects;