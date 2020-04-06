// Test Cases for assertArraysEqual.js
const assertArraysEqual = require('../assertArraysEqual');

// Pass
assertArraysEqual([ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ]);
// Fail
assertArraysEqual([ 1, 2, 3 ], [ 1, 2, 3, 4 ]);
// Fail
assertArraysEqual([ 'a', 'b', 'c', 'd' ], [ 'a', 'b', 5, 10 ]);
// Pass
assertArraysEqual([ 'slim', 'shady' ], [ 'slim', 'shady' ]);
