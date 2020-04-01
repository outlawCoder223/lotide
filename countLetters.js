const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let cleanSentence = sentence.toLowerCase().split(' ').join('');
  const letterCount = {};
  for (let char of cleanSentence) {
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }
  return letterCount;
};

// Test Cases:

const letters1 = countLetters('slim shady');
const letters2 = countLetters('RaNcE CaMPbeLl');

assertEqual(letters1['s'], 2);
assertEqual(letters2['l'], 2);
assertEqual(letters2[' '], undefined);
assertEqual(letters2['E'], undefined);
