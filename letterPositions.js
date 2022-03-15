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


module.exports = letterPositions;