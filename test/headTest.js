const assert = require('chai').assert;
const head = require(`../head`);

describe('#head', () => {
  it("returns 1 and [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});