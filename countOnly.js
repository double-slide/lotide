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

module.exports = countOnly;