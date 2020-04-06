// uses a callback to search an object and returns the first key that matches the callback
const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
