// Tests for findKey.js
const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  const obj = { a: 1, b: 2, c: 3 };
  it('returns the first key to match the callback passed in', () => {
    const result = findKey(obj, key => key === 3);
    assert.equal(result, 'c');
  });
  it('returns the first key to match the callback passed in', () => {
    const result = findKey(obj, key => key > 1);
    assert.equal(result, 'b');
  });
  it('returns undefined if there is no match', () => {
    const result = findKey(obj, key => key === 4);
    assert.isUndefined(result);
  });
});