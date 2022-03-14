const assertArraysEqual = function(array1, array2) {
  let areArraysEqual = false;
  
  // check for two empty arrays
  if (array1.length === 0 && array2.length === 0) {
    areArraysEqual = true;
  }


  // check for non-empty arrays matching true/false
  if (array1.length !== array2.length) {
    areArraysEqual = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        areArraysEqual = false;
      } else {
        areArraysEqual = true;
      }
    }
  }

  return areArraysEqual;

};

module.exports = assertArraysEqual;