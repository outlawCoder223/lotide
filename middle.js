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

const middle = function(arr) {
  const middleOfArr = [];
  let midIndex;
  if (arr.length <= 2) {
    return middleOfArr;
  } else if (arr.length % 2 !== 0) {
    midIndex = Math.floor(arr.length / 2);
    middleOfArr.push(arr[midIndex]);
  } else {
    midIndex = arr.length / 2;
    middleOfArr.push(arr[midIndex - 1]);
    middleOfArr.push(arr[midIndex]);
  }
  return middleOfArr;
};

// Test Cases

assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6, 7 ]), [ 4 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
assertArraysEqual(middle([ 1, 2 ]), []);
assertArraysEqual(middle([ 'hello', 'cats', 'gregory', 'pewter' ]), [ 'cats', 'gregory' ]);
assertArraysEqual(middle([]), []);
