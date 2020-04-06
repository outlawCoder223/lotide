// Tests for tail.js
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('does not modify original array', () => {
    const numbers = [ 1, 2, 3, 4 ];
    tail(numbers);
    assert.strictEqual(numbers.length, 4);
  });
  it('returns all elements after the first element', () => {
    const letters = [ 'a', 'b', 'c', 'd' ];
    const lettersTail = tail(letters);
    assert.deepEqual(lettersTail, [ 'b', 'c', 'd' ]);
  });
  it('returns an empty array when passed an empty array', () => {
    assert.deepEqual(tail([]), []);
  });
  it('returns an empty array if an array with one element is passed', () => {
    assert.deepEqual(tail([ 1 ]), []);
  });
});
