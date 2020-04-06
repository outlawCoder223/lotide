// Test for takeUntil.js
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should not mutate original array', () => {
    const arr = [ -3, -2, -1, 0, 1, 2, 3 ];
    const result = takeUntil(arr, (el) => el > 0);
    const expected = [ -3, -2, -1, 0, 1, 2, 3 ];
    assert.deepEqual(arr, expected);
    assert.notDeepEqual(result, expected);
  });
  it('should return a slice of an array once the callback returns a truthy value', () => {
    const arr = [ -3, -2, -1, 0, 1, 2, 3 ];
    const result = takeUntil(arr, (el) => el === 2);
    const expected = [ -3, -2, -1, 0, 1 ];
    assert.deepEqual(result, expected);
  });
  it('should return an empty array when passed an empty array', () => {
    const arr = [];
    const result = takeUntil(arr, (el) => el > 4);
    const expected = [];
    assert.deepEqual(result, expected);
  });
});