const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertEqual(assertArraysEqual([], []), true);