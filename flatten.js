// Recurrsively flattens arrays: [ 1, 2, [ 3, 4, [ 5 ] ] ] => [ 1, 2, 3, 4, 5 ]
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

// const flatten = function(arrayToFlatten) {
//   const flatArray = [];
//   for (let item of arrayToFlatten) {
//     if (Array.isArray(item)) {
//       for (let subItem of item) {
//         flatArray.push(subItem);
//       }
//     } else {
//       flatArray.push(item);
//     }
//   }
//   return flatArray;
// };
module.exports = flatten;
