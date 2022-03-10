// FOR TESTING
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




// FUNCTION
// takes in object and value
// scan object and return first key which contains the given value
// if no key with that given value, return undefined


const findKeyByValue = (objectIncoming, valueToFind) => {

  let objectToScan = objectIncoming;

  for (let key in objectToScan) {
    if (objectToScan[key] === valueToFind) {
      return key;
    }
  }

  return undefined;

};


// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);