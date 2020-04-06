// Returns a slice of an array with elements taken from the beginning
// and stops when the callback returns a truthy value.
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;