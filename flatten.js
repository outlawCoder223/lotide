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

// Possible Recursive Solution???
// const flatten = function(array) {
//   let flatArray = [];
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       flatArray = flatArray.concat(flatten(item));
//     } else {
//       flatArray.push(item);
//     }
//   }
//   return flatArray;
// };

const flatten = function(arrayToFlatten) {
  const flatArray = [];
  for (let item of arrayToFlatten) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        flatArray.push(subItem);
      }
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
};

// Test Cases
assertArraysEqual(flatten([ 1, 2, 3, 4, 5 ]), [ 1, 2, 3, 4, 5 ]);
assertArraysEqual(flatten([ 1, [ 2, 3, 4, 5 ] ]), [ 1, 2, 3, 4, 5 ]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([ 1, 2, [ 3, 4 ], 5, [ 6 ] ]), [ 1, 2, 3, 4, 5, 6 ]);
