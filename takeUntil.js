// function that takes in an array and a callback func
// returns an array that is pushed to from the original array until the callback provided is true
const takeUntil = function(array, callback) {
  const newArr = []; // initializes new array
  for (let element of array) { // loops over elements in array given
    if (!callback(element)) { // if callback func returns falsy push to newArr
      newArr.push(element);
    } else { // otherwise return the newArr
      return newArr;
    }
  }
};

module.exports = takeUntil;