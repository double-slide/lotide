const { mainModule } = require("process");

// checks if two arrays are equal, returns true or false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// Returns true if both objects have identical keys with identical values
// otherwise returns false
const eqObjects = (object1, object2) => {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        } else {
          // do nothing
        }
      } else if (object1[key] === object2[key]) {
        // do nothing
      } else {
        return false;
      }
    }

  }
  return true;
};

module.exports = eqObjects;