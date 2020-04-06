// Tests for findKeyByValue.js
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const obj = {
    a: 'first',
    b: 'second',
    c: 'second',
    d: 'third'
  };
  it('returns the first key that has a value to match the searched value', () => {
    const result = findKeyByValue(obj, 'first');
    assert.equal(result, 'a');
  });
  it('returns the first key it finds if there are multiple results', () => {
    const result = findKeyByValue(obj, 'second');
    assert.equal(result, 'b');
  });
  it('returns undefined if the search value does not exist', () => {
    const result = findKeyByValue(obj, 'fourth');
    assert.isUndefined(result);
  });
});
