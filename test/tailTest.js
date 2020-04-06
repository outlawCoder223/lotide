// Tests for tail.js
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case 1: Ensure function does not modify original array
const numbers = [ 1, 2, 3, 4, 5, 6 ];
tail(numbers);
assertEqual(numbers.length, 6);

// Test Case 2: Check returned elements
const lyrics = [ 'my', 'name', 'is', 'slim', 'shady' ];
const result = tail(lyrics);
assertEqual(result.length, 4);
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], lyrics[i + 1]);
}

// Test Case 3: Empty array
assertEqual(tail([]).length, 0);

// Test Case 4: One element
assertEqual(tail([ 1 ]).length, 0);
