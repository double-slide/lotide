const flatten = function(arrayToFlatten) {

  let flatArray = [];

  for (let i = 0; i < arrayToFlatten.length; i++) {
    
    if (Array.isArray(arrayToFlatten[i])) {

      for (let j = 0; j < arrayToFlatten[i].length; j++) {
        flatArray.push(arrayToFlatten[i][j]);
      }
    } else {
      flatArray.push(arrayToFlatten[i]);
    }
    
  }

  return flatArray;

};

module.exports = flatten;