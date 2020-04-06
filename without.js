// Takes a source array and an array with items to remove.
// Returns a new array with the items removed from the source.
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = without;