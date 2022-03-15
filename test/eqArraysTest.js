// const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');


// // TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

const {assert} = require('chai');
const eqArrays = require(`../eqArrays`);

describe('#eqArraysTest', () => {
  it('returns true for [1, 2, 3] && [1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns false for [1, 2, 3] && [3, 2, 1]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for ['1', '2', '3'] && ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for ['1', '2', '3'] && ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});