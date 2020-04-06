// Recursively flattens arrays: [ 1, 2, [ 3, 4, [ 5 ] ] ] => [ 1, 2, 3, 4, 5 ]
const flatten = function(array) {
  let flatArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item));
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
};

module.exports = flatten;
