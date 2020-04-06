// Tests for countLetters.js
const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it('returns an object with the count of all letters in a sentence', () => {
    const expected = {
      f: 1,
      o: 2,
      b: 1,
      a: 1,
      r: 1
    };
    assert.deepEqual(countLetters('foo bar'), expected);
  });
  it('is case insensitive', () => {
    const expected = {
      r: 1,
      a: 2,
      n: 1,
      c: 2,
      e: 2,
      m: 1,
      p: 1,
      b: 1,
      l: 2
    };
    assert.deepEqual(countLetters('RanCE CaMpBeLl'), expected);
  });
});
