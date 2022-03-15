// const assertEqualArrays = function(array1, array2) {
//   let areArraysEqual = false;
  
//   if (array1.length !== array2.length) {
//     areArraysEqual = false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         areArraysEqual = false;
//       } else {
//         areArraysEqual = true;
//       }
//     }
//   }

//   if (areArraysEqual === true) {
//     console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }

// };


const without = function(sourceArray, itemsToRemoveArray) {
  let modifiedArray = [];

  for (let sourceElement of sourceArray) {
    
    let removeElement = false;

    for (let removalElement of itemsToRemoveArray) {
      if (sourceElement === removalElement) {
        removeElement = true;
      }
    }

    if (removeElement === false) {
      modifiedArray.push(sourceElement);
    }

  }

  return modifiedArray;

};

module.exports = without;

// // TEST CODE
// assertEqualArrays((without([1, 2, 3], [1])), [2, 3]); // => [2, 3]
// assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertEqualArrays(without([-1, 0, 1, 2], [1, 3]), [-1, 0, 2]); // => ["1", "2"]
// assertEqualArrays(without([1.1, 2.2, 3.3], [1.1, 2]), [2.2, 3.3]); // => ["1", "2"]
// console.log("--------");

// // CONFIRM SOURCE ARRAY IS NOT MODIFIED
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertEqualArrays(words, ["hello", "world", "lighthouse"]);