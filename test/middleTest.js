// Test for middle.js

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6, 7 ]), [ 4 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
assertArraysEqual(middle([ 1, 2 ]), []);
assertArraysEqual(middle([ 'hello', 'cats', 'gregory', 'pewter' ]), [ 'cats', 'gregory' ]);
assertArraysEqual(middle([]), []);
