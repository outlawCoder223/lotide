// Returns the first key to match a value passed in.
const findKeyByValue = function(toSearch, searchVal) {
  const keys = Object.keys(toSearch);
  for (let key of keys) {
    if (toSearch[key] === searchVal) {
      return key;
    }
  }
};

module.exports = findKeyByValue;