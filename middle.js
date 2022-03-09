// implement function middle which will take an array and return the middle-most element(s) of the given array
// return empty when array has 1 or 2 elements
// for odd numbered arrays, return middle element
// for even numbered arrays, return middle two elements


const assertEqualArrays = function(array1, array2) {
  
  let areArraysEqual = false;

  if (array1.length === 0 && array2.length === 0) {
    areArraysEqual = true;
  }

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


const middle = function(arrayToFindMiddle) {
  let returnArray = [];

  if (arrayToFindMiddle.length <= 2) {
    // do this if array has length <= 2
    return returnArray;

  } else if (arrayToFindMiddle.length % 2 === 0) {
    // do this when array length is even
    let index1 = (arrayToFindMiddle.length / 2) - 1;
    let index2 = index1 + 1;
    returnArray[0] = arrayToFindMiddle[index1];
    returnArray[1] = arrayToFindMiddle[index2];
    return returnArray;

  } else if (arrayToFindMiddle.length % 2 !== 0) {
    // do this when array length is odd
    let index3 = Math.floor(arrayToFindMiddle.length / 2);
    returnArray[0] = arrayToFindMiddle[index3];
    return returnArray;

  }

};



// TEST CODE
console.log(assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertEqualArrays(middle([1]), []));
console.log(assertEqualArrays(middle([1, 2]), []));
console.log(assertEqualArrays(middle([1, 2, 3]), [2]));
console.log(assertEqualArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));
