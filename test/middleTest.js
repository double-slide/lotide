const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CODE
assertEqual((assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])), true);
assertEqual((assertArraysEqual(middle([1]), [])), true);
assertEqual((assertArraysEqual(middle([1, 2]), [])), true);
assertEqual((assertArraysEqual(middle([1, 2, 3]), [2])), true);
assertEqual((assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])), true);
assertEqual((assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [6])), false);
