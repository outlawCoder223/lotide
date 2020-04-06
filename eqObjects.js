// returns true if two objects are equal.
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (let key of obj1Keys) {
    const isPrimitive = object1[key] !== Object(object1[key]);
    if (isPrimitive) {
      if (object1[key] !== object2[key]) return false;
    } else {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (!eqObjects(object1[key], object2[key])) return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
