// function takes in object and a callback
// scans the object and returns the first key for which the callback returns a truthy value
// if no key is found, return 'undefined'
const findKey = function(object, callback) {
  let result = "";

  for (let key in object) {
    if (callback(object[key]) === true) {
      result = key;
      return result;
    }
  }
  return undefined;
};

module.exports = findKey;
