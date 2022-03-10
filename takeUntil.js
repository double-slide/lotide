// FOR TESTING
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



// function will take two parameters
// array to work with
// callback function
// function will return a "slice of the array with elements taken from the beginning" until the callback function indicates

const takeUntil = function(array, callback) {
  
  let newArray = [];

  for (let element in array) {
    if (callback(array[element]) === false) {
      newArray.push(array[element]);
    } else if (callback(array[element]) === true) {
      break;
    }
  }
  return newArray;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqualArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);