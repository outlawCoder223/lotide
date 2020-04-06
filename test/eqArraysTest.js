// Test for eqArrays.js
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true if the arrays are the same length and have the same values in the same order.', () => {
    const a = [ 1, 2, 3 ];
    const b = [ 1, 2, 3 ];
    const result = eqArrays(a, b);
    assert.isTrue(result);
  });
  it('returns false if the order of the two arrays are different', () => {
    const a = [ 1, 2, 3 ];
    const b = [ 2, 1, 3 ];
    const result = eqArrays(a, b);
    assert.isFalse(result);
  });
  it('returns false if the arrays are not the same length', () => {
    const a = [ 1, 2, 3, 4 ];
    const b = [ 1, 2, 3 ];
    const result = eqArrays(a, b);
    assert.isFalse(result);
  });
  it('returns false if the arrays have different value types', () => {
    const a = [ '1', 2, 3 ];
    const b = [ 1, 2, 3];
    const result = eqArrays(a, b);
    assert.isFalse(result);
  });
  it('can test arrays recurrisively', () => {
    const a = [ 1, 2, [ 3, 4 ], [ [ 5 ] ] ];
    const b = [ 1, 2, [ 3, 4 ], [ [ 5 ] ] ];
    const result = eqArrays(a, b);
    assert.isTrue(result);
  });
});