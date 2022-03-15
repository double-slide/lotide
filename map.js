// const words = ["lets", "get", "ready", "to", "rumble"];


// // assert function for testing only
// const assertEqualArrays = function(array1, array2) {
//   let areArraysEqual = false;
  
//   // check for two empty arrays
//   if (array1.length === 0 && array2.length === 0) {
//     areArraysEqual = true;
//   }


//   // check for non-empty arrays matching true/false
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

//   // console log if pass or fail
//   if (areArraysEqual === true) {
//     console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }

// };




// map function will take two arguments: array to map, and a callback function
// return a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// // call map function with words array and return array of first letter only
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word += "-");
// const results3 = map(words, word => word.toUpperCase());



// // TEST CODE
// // console.log(results1);
// assertEqualArrays(results1, ['l', 'g', 'r', 't', 'r']);
// assertEqualArrays(results2, ["lets-", "get-", "ready-", "to-", "rumble-"]);
// assertEqualArrays(results3, ["LETS", "GET", "READY", "TO", "RUMBLE"]);
