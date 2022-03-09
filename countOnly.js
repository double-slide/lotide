
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(arrayToCount, objectForCounting) {

  let countedObjectsResult = {};

  for (let key in objectForCounting) {
    
    let counter = 0;

    if (objectForCounting[key] === false) {
      break;
    } else if (objectForCounting[key] === true) {
      for (let ii = 0; ii < arrayToCount.length; ii++) {
        if (arrayToCount[ii] === key) {
          counter++;
        }
      }
    }

    countedObjectsResult[key] = counter;

  }

  return countedObjectsResult;

};


// array1 = ["a", "a", "b", "c", "d", "e", "a"];
// object1 = {
//   a: true,
//   d: true,
//   b: false,
//   f: true
// };

// console.log(countOnly(array1, object1));


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));