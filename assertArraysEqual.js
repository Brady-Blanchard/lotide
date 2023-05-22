// require eqArrays function
const eqArrays = require('./eqArrays');

// function for asserting two arrays equality
const assertArraysEqual = function(actual, expected) {
  // if equality is true then output to console assertion passed
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  // otherwise output to console assertion failed
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;