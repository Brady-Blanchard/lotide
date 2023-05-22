// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // loops over keys in allItems
  for (const item of allItems) {
    // if the key is true in itemsToCount then continue to next if
    if (itemsToCount[item]) {
      // if key exists in results increment it by 1 else initialize it to 1
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;