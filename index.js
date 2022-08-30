const sumItems = function(array) {
  // Sum all the numbers in the array
  let res = 0;
  const recurse = function(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        recurse(item);
      } else {
        res += item;
      }
    }
  };
  recurse(array);
  return res;
};

module.exports = sumItems;
