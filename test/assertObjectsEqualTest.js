// Tests for assertObjectsEqual.js
const assertObjectsEqual = require('../assertObjectsEqual');

// Pass
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba);

// Fail
const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc);

// Pass
const cd = { c: '1', d: [ '2', 3 ] };
const dc = { d: [ '2', 3 ], c: '1' };
assertObjectsEqual(cd, dc);

// Fail
const cd2 = { c: '1', d: [ '2', 3, 4 ] };
assertObjectsEqual(cd, cd2);

// Fail
const cd3 = { c: '1', d: 'a' };
assertObjectsEqual(cd, cd3);
