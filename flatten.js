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




const flatten = function(arrayToFlatten) {

  let flatArray = [];

  for (let i = 0; i < arrayToFlatten.length; i++) {
    
    if (Array.isArray(arrayToFlatten[i])) {

      for (let j = 0; j < arrayToFlatten[i].length; j++) {
        flatArray.push(arrayToFlatten[i][j]);
      }
    } else {
      flatArray.push(arrayToFlatten[i]);
    }
    
  }

  return flatArray;

};

// TEST CODE
let testArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];
assertEqualArrays(flatten(testArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



