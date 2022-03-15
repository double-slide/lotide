# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @iaan_j/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: takes array, returns 0th element
* `tail()`: takes array, returns 1st, 2nd.... nth elements
* `middle()`: takes array, returns middle element(s) in array, depending if odd/even
* `assertArraysEqual()`:
* `assertEqual()`: returns assertion statement based on two arguments being equal
* `assertObjectsEqual()`: returns assertion statement based on two input object being equal
* `countLetters()`: returns object with count of letters from provided string
* `countOnly()`: returns object with count of specific input character from input string
* `eqArrays()`: takes two arrays, returns true if the same or false if not
* `eqObjects()`: takes to input objects and returns true if they are equal, false if not equal
* `findKey()`: finds first instance of key in an object
* `findKeyByValue()`: finds first instance of key in an object
* `flatten()`: takes nested arrays and returns single (flat) array
* `letterPositions()`: takes string and returns object with index locations of each letter
* `map()`: takes array and inline callback function, and returns new array based on callback
* `takeUntil()`: takes array and callback function, returns first slice of array based on callback input
* `without()`: takes source array and array of items to remove; returns new array based on source minus removal