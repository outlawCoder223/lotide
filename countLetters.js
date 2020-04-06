// counts the number of letters in a sentence and returns an object with the count
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

module.exports = countLetters;
