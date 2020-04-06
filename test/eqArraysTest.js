const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases:

// Order tests
assertEqual(eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ]), true);
assertEqual(eqArrays([ 1, 2, 3 ], [ 3, 2, 1 ]), false);
// Type tests
assertEqual(eqArrays([ '1', '2', '3' ], [ '1', '2', '3' ]), true);
assertEqual(eqArrays([ '1', '2', '3' ], [ '1', '2', 3 ]), false);
// Length tests
assertEqual(eqArrays([ 1, 2, 3, 4 ], [ 1, 2 ]), false);
// Nested arrays tests
assertEqual(eqArrays([ 1, 2, [ 3, 4, [ 5, 6 ] ] ], [ 1, 2, [ 3, 4, [ 5, 6 ] ] ]), true);
assertEqual(eqArrays([ 'a', 'b', 'c', [ 1, 2, 3 ] ], [ 'a', 'b', 'c', [ 1, 2 ] ]), false);
assertEqual(eqArrays([ 1, 2, [ undefined, 5, 3 ], 't', 'j' ], [ [ 2, 3, 4 ], 3, 2, [ 5, 6 ], 4 ]), false);
assertEqual(
  eqArrays(
    [ 1, (2)[(3, 4, 5)], [ 'a', 'b' ], [ [ [ 3, 4 ] ] ] ],
    [ 1, (2)[(3, 4, 5)], [ 'a', 'b' ], [ [ [ 3, 4 ] ] ] ]
  ),
  true
);
