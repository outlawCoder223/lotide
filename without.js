const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('✅ Assertion Passed: These arrays are equal');
  } else {
    console.log('🛑 Assertion Failed: These arrays are not equal');
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

// Test Cases:

// Check without() not modifying original array
const words = [ 'hello', 'world', 'lighthouse' ];
without(words, [ 'lighthouse' ]);
assertArraysEqual(words, [ 'hello', 'world', 'lighthouse' ]);

// Ensure type matters
assertArraysEqual(without([ '1', '2', '3' ], [ 1, 2, '3' ]), [ '1', '2' ]);
// Function working properly
assertArraysEqual(without([ 1, 2, 3, 4 ], [ 1, 2 ]), [ 3, 4 ]);
// Empty array returns new source array
assertArraysEqual(without([ 'slim', 'shady' ], []), [ 'slim', 'shady' ]);
