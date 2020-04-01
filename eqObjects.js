const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (let key of obj1Keys) {
    if (!object2[key]) return false;
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Test Cases:

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: '1', d: [ '2', 3 ] };
const dc = { d: [ '2', 3 ], c: '1' };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: '1', d: [ '2', 3, 4 ] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cd3 = { c: '1', d: 'a' };
assertEqual(eqObjects(cd, cd3), false);
