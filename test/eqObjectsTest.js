// Tests for eqObjects.js
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true if both objects have the same keys of the same values', () => {
    const ab = { a: '1', b: '2' };
    const ba = { b: '2', a: '1' };
    const result = eqObjects(ab, ba);
    assert.isTrue(result);
  });
  it('returns false if the keys and values of two objects are not the same', () => {
    const ab = {a: 1, b: 2};
    const ba = {b: 1, a: 2};
    const result = eqObjects(ab, ba);
    assert.isFalse(result);
  });
  it('returns true if keys have equal arrays as values', () => {
    const cd = { c: '1', d: [ '2', 3 ] };
    const dc = { d: [ '2', 3 ], c: '1' };
    const result = eqObjects(cd, dc);
    assert.isTrue(result);
  });
  it('returns false if keys have unequal arrays as values', () => {
    const cd = { c: '1', d: [ '2', 3 ]};
    const dc = { d: [ 2, 3 ], c: '1'};
    const result = eqObjects(cd, dc);
    assert.isFalse(result);
  });
  it('returns true if keys have equal objects as values', () => {
    const ef = { e: { g: 1 } , f: { h: 1 } };
    const fe = { f: { h: 1 } , e: { g: 1 } };
    const result = eqObjects(ef, fe);
    assert.isTrue(result);
  });
  it('returns false if keys have unequal objects as values', () => {
    const ef = { e: { g: 1 } , f: { h: 1 } };
    const fe = { e: { h: 1 } , f: { g: 1 } };
    const result = eqObjects(ef,fe);
    assert.isFalse(result);
  });
});
