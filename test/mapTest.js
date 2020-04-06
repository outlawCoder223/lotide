// Tests for map.js
const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  const test = [ 1, 2, 3, 4, 5, 6 ];
  it('returns a new array', () => {
    const result = map(test, (el) => el * el);
    const expected = [ 1, 2, 3, 4, 5, 6 ];
    assert.deepEqual(test, expected);
    assert.notDeepEqual(test, result);
  });
  it('returns a new array with the values transformed by callback function', () => {
    const result = map(test, (el) => el * el);
    const expected = [ 1, 4, 9, 16, 25, 36 ];
    assert.deepEqual(result, expected);
  });
  it('returns an empty array if an empty array is passed', () => {
    const result = map([], el => el * el);
    const expected = [];
    assert.deepEqual(result, expected);
  });
});