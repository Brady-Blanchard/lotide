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
  return console.log(newArray);
};

// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]