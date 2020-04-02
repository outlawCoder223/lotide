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

const words = [ 'two', 'trailer', 'park', 'girls', 'get', 'rowdy', 'outside' ];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.toUpperCase());
const results3 = map(words, (word) => (word.length > 4 ? 'big' : 'small'));

// Test Cases

assertArraysEqual(results1, [ 't', 't', 'p', 'g', 'g', 'r', 'o' ]);
assertArraysEqual(results2, [ 'TWO', 'TRAILER', 'PARK', 'GIRLS', 'GET', 'ROWDY', 'OUTSIDE' ]);
assertArraysEqual(results3, [ 'small', 'big', 'small', 'big', 'small', 'big', 'big' ]);
