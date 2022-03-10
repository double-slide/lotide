const assertEqualArrays = function(array1, array2) {
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

  // console log if pass or fail
  if (areArraysEqual === true) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

// TEST CODE
assertEqualArrays([1, 2, 3, 4], [1, 2, 3, 4]);
assertEqualArrays([], []);

