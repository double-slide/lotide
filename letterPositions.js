// assert array function for testing onlyu=

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






// function takes in string
// function returns object with index locations of each letter contained within an array

const letterPositions = (sentenceToCount) => {

  // Exercise instruction unclear, says to skip spaces but solution does not. Toggle space skipping with split/join below.
  let sentenceWithoutSpaces = sentenceToCount; //.split(" ").join("");
  let letterCountObject = {};

  for (let ii = 0; ii < sentenceWithoutSpaces.length; ii++) {

    let char = sentenceWithoutSpaces[ii];

    if (letterCountObject[char] === undefined) {
      letterCountObject[char] = [ii];
    } else {
      letterCountObject[char].push(ii);
    }
  }
  return letterCountObject;
};


assertEqualArrays(letterPositions("hello").e, [1]);
