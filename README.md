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

* `head([...])`: returns the first element in an arrray.
* `tail([...])`: returns the last element in an array.
* `middle([...])`: returns the middle of an array that has at least 3 elements.
* `flatten([...[...]])`: takes an array of arrays and returns a singular array with all elements.
* `countOnly([...],{...})`: takes an array and object and returns an object with the count of each element in the array that's value is true in the second parameter.
* `letterPositions(...)`: takes a string and returns an object with the letters as keys and their indecies as their value.