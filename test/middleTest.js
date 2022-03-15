// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');


// // TEST CODE
// assertEqual((assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])), true);
// assertEqual((assertArraysEqual(middle([1]), [])), true);
// assertEqual((assertArraysEqual(middle([1, 2]), [])), true);
// assertEqual((assertArraysEqual(middle([1, 2, 3]), [2])), true);
// assertEqual((assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])), true);
// assertEqual((assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [6])), false);


const {assert} = require('chai');
const middle = require(`../eqArrays`);

describe('#middle', () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });

});