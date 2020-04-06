// Tests for without.js
const assert = require('chai').assert;
const without = require('../without');
describe('#without', () => {
  it('does not mutate original array', () => {
    const nums = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
    const result = without(nums, [ 0, 1, 2 ]);
    const expected = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
    assert.deepEqual(nums, expected);
    assert.notDeepEqual(result, expected);
  });
  it('returns a new array without the items included in itemsToRemove array', () => {
    const nums = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
    const result = without(nums, [ -4, 2, 5 ]);
    const expected = [ -5, -3, -2, -1, 0, 1, 3, 4 ];
    assert.deepEqual(result, expected);
  });
  it('only removes items of same type', () => {
    const arr = [ '1', 1, '2', 2, '3', 3 ];
    const result = without(arr, [ '1', 2, '3' ]);
    const expected = [ 1, '2', 3 ];
    assert.deepEqual(result, expected);
  });
  it('returns an empty array if passed an empty array of items to remove', () => {
    const arr = [ '1', 1, '2', 2, '3', 3 ];
    const result = without(arr, []);
    const expected = [ '1', 1, '2', 2, '3', 3 ];
    assert.deepEqual(result, expected);
  });
});