const assertEqualArrays = function(array1, array2) {
  let areArraysEqual = false;
  
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

  if (areArraysEqual === true) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

// TEST CODE
assertEqualArrays([1, 2, 3, 4], [1, 2, 3, 4]);

