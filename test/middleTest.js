// Test for middle.js
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns the middle element of an array of odd length', () => {
    assert.deepEqual(middle([ 1, 2, 3, 4, 5 ]), [ 3 ]);
  });
  it('returns the middle two elements of an array of even length', () => {
    assert.deepEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
  });
  it('returns an empty array if an array with a length of two or less is passed', () => {
    assert.deepEqual(middle([ 1, 2 ]), []);
    assert.deepEqual(middle([]), []);
  });
});
