// function will take two parameters
// array to work with
// callback function
// function will return a "slice of the array with elements taken from the beginning" until the callback function indicates

const takeUntil = function(array, callback) {
  
  let newArray = [];

  for (let element in array) {
    if (callback(array[element]) === false) {
      newArray.push(array[element]);
    } else if (callback(array[element]) === true) {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;