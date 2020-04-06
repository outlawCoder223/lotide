// Returns the middle element of an odd length array or
// the middle two elements of an even array.
const middle = function(arr) {
  const middleOfArr = [];
  let midIndex;
  if (arr.length <= 2) {
    return middleOfArr;
  } else if (arr.length % 2 !== 0) {
    midIndex = Math.floor(arr.length / 2);
    middleOfArr.push(arr[midIndex]);
  } else {
    midIndex = arr.length / 2;
    middleOfArr.push(arr[midIndex - 1]);
    middleOfArr.push(arr[midIndex]);
  }
  return middleOfArr;
};

module.exports = middle;
