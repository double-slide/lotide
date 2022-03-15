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

module.exports = findKeyByValue;