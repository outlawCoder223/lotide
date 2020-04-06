// Tests for letterPositions.js
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns an object with every letter that appears in a sentence and their indices in an array', () => {
    const sentence = 'foo bar';
    const expected = {
      f: [ 0 ],
      o: [ 1, 2 ],
      b: [ 4 ],
      a: [ 5 ],
      r: [ 6 ]
    };
    const result = letterPositions(sentence);
    assert.deepEqual(result, expected);
  });
  it('is case sensitive', () => {
    const sentence = 'foO bar';
    const expected = {
      f: [ 0 ],
      o: [ 1 ],
      O: [ 2 ],
      b: [ 4 ],
      a: [ 5 ],
      r: [ 6 ]
    };
    const result = letterPositions(sentence);
    assert.deepEqual(result, expected);
  });
  it('will not store the index of spaces', () => {
    const sentence = 'foo bar';
    const result = letterPositions(sentence);
    assert.isUndefined(result[' ']);
  });
});