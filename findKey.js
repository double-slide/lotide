// FOR TESTING
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// function takes in object and a callback
// scans the object and returns the first key for which the callback returns a truthy value
// if no key is found, return 'undefined'
const findKey = function(object, callback) {
  let result = "";

  for (let key in object) {
    // console.log("key", key);
    if (callback(object[key]) === true) {
      // console.log("you did it");
      result = key;
      return result;
    }
  }
  return undefined;
};

module.exports = findKey;


// let objectToCheck1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };


// let objectToCheck2 = {
//   "iaan": { stars: 1 },
//   "ryan":   { stars: 3 },
//   "drew":      { stars: 7 },
//   "shelly":   { stars: 9 },
// };



// // TEST CODE
// assertEqual(findKey(objectToCheck1, x => x.stars === 2), "noma");
// assertEqual(findKey(objectToCheck2, x => x.stars === 9), "shelly");