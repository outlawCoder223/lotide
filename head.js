const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([ 5, 6, 7 ]), 5);
assertEqual(head([ 'Hi', 'my', 'name', 'is' ]), 'Hi');
assertEqual(head([ true ]), true);
assertEqual(head([], undefined));
