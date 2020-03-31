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

// Test Cases

assertArraysEqual([ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ]);
assertArraysEqual([ 1, 2, 3 ], [ 1, 2, 3, 4 ]);
assertArraysEqual([ 'a', 'b', 'c', 'd' ], [ 'a', 'b', 5, 10 ]);
assertArraysEqual([ 'slim', 'shady' ], [ 'slim', 'shady' ]);
