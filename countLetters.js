// function takes sentence string
// returns count of the letters in that sentence


const countLetters = (sentenceToCount) => {
  let sentenceWithoutSpaces = sentenceToCount.split(" ").join("");
  let letterCountObject = {};

  for (let char of sentenceWithoutSpaces) {

    if (letterCountObject[char] === undefined) {
      letterCountObject[char] = 1;
    } else {
      letterCountObject[char] += 1;
    }
  }
  return letterCountObject;
};

module.exports = countLetters;