const middle = function(arrayToFindMiddle) {
  let returnArray = [];

  // do this if array has length <= 2
  if (arrayToFindMiddle.length <= 2) {
    return returnArray;

  }
  
  // do this when array length is even
  if (arrayToFindMiddle.length % 2 === 0) {
    let index1 = (arrayToFindMiddle.length / 2) - 1;
    let index2 = index1 + 1;
    returnArray[0] = arrayToFindMiddle[index1];
    returnArray[1] = arrayToFindMiddle[index2];
    return returnArray;

  }

  // do this when array length is odd
  if (arrayToFindMiddle.length % 2 !== 0) {
    let index3 = Math.floor(arrayToFindMiddle.length / 2);
    returnArray[0] = arrayToFindMiddle[index3];
    return returnArray;
  }

};

module.exports = middle;