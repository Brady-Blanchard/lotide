# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brady-blanchard/lotide`

**Require it:**

`const _ = require('@brady-blanchard/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters("...")`: takes a string and returns an object with all the characters as keys and the count as values
* `countOnly([...],{...})`: takes an array and object and returns an object with the count of each element in the array that's value is true in the second parameter.
* `eqArrays([...],[...])`: takes in two arrays as parameters and returns true or false depending on the equality of the elements.
* `eqObjects({...},{...})`: takes in two objects as parameters and returns true or false depending on the equality of the keys and values.
* `findKey({...},()=>{}")`: takes an object and callback function and returns the first key that the callback function returns truthy to.
* `findKeyByVal({...},"...")`: takes an object and a value and returns the first key from the object that matches the value.
* `flatten([...[...]])`: takes an array of arrays and returns a singular array with all elements.
* `head([...])`: returns the first element in an arrray.
* `letterPositions("...")`: takes a string and returns an object with the letters as keys and their indecies as their value.
* `map([...],()=>{})`: takes an array and a callback function, returns a new array based on the callback function.
* `middle([...])`: returns the middle of an array that has at least 3 elements.
* `tail([...])`: returns the last element in an array.
* `takeUntil([...],()=>{})`: takes an array and a callback function, returns an array that is pushed to from the original array until the callback provided is true
* `without([...],[...]])`: takes two arrays, first is a source array and second is an array of items to remove from the source array source. returns source array with without elements in items to remove array.