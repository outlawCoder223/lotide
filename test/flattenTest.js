// Tests for flatten.js
const assert = require('chai').assert;
const flatten = require('../flatten');
describe('#flatten', () => {
  it('returns a single array if passed a single array', () => {
    const arr = [ 1, 2, 3, 4, 5 ];
    const expected = [ 1, 2, 3, 4, 5 ];
    const result = flatten(arr);
    assert.deepEqual(result, expected);
  });
  it('returns a single array if multiple arrays are contained in an array', () => {
    const arr = [ 1, 2, [ 3, 4, [ 5 ], 6, [ 7 ] ] ];
    const expected = [ 1, 2, 3, 4, 5, 6, 7 ];
    const result = flatten(arr);
    assert.deepEqual(result, expected);
  });
  it('returns an empty array if passed an empty array', () => {
    const arr = [];
    const expected = [];
    const result = flatten(arr);
    assert.deepEqual(result, expected);
  });
});