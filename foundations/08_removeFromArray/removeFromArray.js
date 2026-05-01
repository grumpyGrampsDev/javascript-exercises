// using a rest parameter "...theArgs" allows for expansion of arguments
const removeFromArray = function (array, ...theArgs) {
  const filterArray = [];
  // forEach steps through each item of an array and executes the function
  array.forEach((element) => {
    // if the item is not in the array...
    if (!theArgs.includes(element)) {
      // push adds it to the end of the array
      filterArray.push(element);
    }
  });
  // return the new array, excluding the values passed to the
  // removeFromArray() function
  return filterArray;
};

// Do not edit below this line
module.exports = removeFromArray;
