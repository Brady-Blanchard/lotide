// function that finds the first key in an object that the call back returns truthy
const findKey = function(object, callback) {
  const keys = Object.keys(object); // initialize an array of keys in object
  for (const key of keys) { // loops through the keys
    if (callback(object[key])) { // if the callback function returns truthy
      return key; // return key
    }
  }
  return undefined; // if nothing is found return undefined
};

// EXPORT FUNCTION
module.exports = findKey;