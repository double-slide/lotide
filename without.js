const without = function(sourceArray, itemsToRemoveArray) {
  let modifiedArray = [];

  for (let sourceElement of sourceArray) {
    
    let removeElement = false;

    for (let removalElement of itemsToRemoveArray) {
      if (sourceElement === removalElement) {
        removeElement = true;
      }
    }

    if (removeElement === false) {
      modifiedArray.push(sourceElement);
    }

  }

  return modifiedArray;

};

module.exports = without;