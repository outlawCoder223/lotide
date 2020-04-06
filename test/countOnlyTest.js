// Tests for countOnly.js
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [ 'Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe' ];
  const results = countOnly(firstNames, { Jason: true, Karima: true, Fang: true });
  it('returns the count of items from the itemsToCount object', () => {
    assert.equal(results.Jason, 1);
    assert.equal(results.Fang, 2);
  });
  it('returns undefined for an item it did not find', () => {
    assert.equal(results.Karima, undefined);
  });
});
