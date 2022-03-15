// const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');


// // TEST CODE
// assertEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]), true);
// assertEqual(assertArraysEqual([], []), true);



const {assert} = require('chai');
const assertEqArrays = require(`../assertArraysEqual`);

describe('#assertArraysEqualTest', () => {
  it('returns true for [1, 2, 3] && [1, 2, 3]', () => {
    assert.deepEqual(assertEqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns true for [] && []', () => {
    assert.deepEqual(assertEqArrays([], []), true);
  });
  it('returns false for [1] && []', () => {
    assert.deepEqual(assertEqArrays([1], []), false);
  });
});