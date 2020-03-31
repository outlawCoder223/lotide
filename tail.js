const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// Test Cases
// Ensure function does not modify original array
const numbers = [ 1, 2, 3, 4, 5, 6 ];
tail(numbers);
assertEqual(numbers.length, 6);

// Test Case 1: Check returned elements
const lyrics = [ 'my', 'name', 'is', 'slim', 'shady' ];
const result = tail(lyrics);
assertEqual(result.length, 4);
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], lyrics[i + 1]);
}

// Test Case 2: Empty array
assertEqual(tail([]).length, 0);

// Test Case 3: One element
assertEqual(tail([ 1 ]).length, 0);
