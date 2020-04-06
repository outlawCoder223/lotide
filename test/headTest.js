// Test Code for head.js
const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([ 5, 6, 7 ]), 5);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head([ '5' ]), '5');
  });
  it('returns true for [ true, false, false, true]', () => {
    assert.strictEqual(head([ true, false, false, true ]), true);
  });
  it('returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
});
