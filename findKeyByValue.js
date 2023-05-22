// returns the first key from an object that matches val
const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj); // stores an array of obj keys in a variable
  for (const key of keys) { // loops through the keys
    if (obj[key] === val) { // if the value of obj[key] equals val
      return key; // return key
    }
  }
  return undefined; // return undefined if no key with val was found
};

// EXPORT FUNCTION
module.exports = findKeyByValue;