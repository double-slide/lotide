// const assertEqual = require('../assertEqual');

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("iaan", "iaan");
// assertEqual(2, 5);


const {assert} = require('chai');
const assertEqual = require(`../assertEqual`);

describe('#assertEqual', () => {
  it('returns true for (1, 1)', () => {
    assert.deepEqual(assertEqual(1, 1), true);
  });
  it('returns false for (2, 5)', () => {
    assert.deepEqual(assertEqual(2, 5), false);
  });
  it('returns true for ("iaan, "iaan")', () => {
    assert.deepEqual(assertEqual("iaan", "iaan"), true);
  });
  it('returns false for ("lighthouse", "labs")', () => {
    assert.deepEqual(assertEqual("lighthouse", "labs"), false);
  });
});