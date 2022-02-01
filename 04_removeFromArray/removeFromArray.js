/*const removeFromArray = function(startingArray, removals) { //...removal will return an array of all args passed in, no matter how many
  const indexToSplice = startingArray.indexOf(removal);
  startingArray.splice(indexToSplice, 1);
  return startingArray
}; */

const removeFromArray = function(startingArray, ...removals) { 
  for (const removal of removals) {
    if (startingArray.includes(removal)) {
      let indexToSplice = startingArray.indexOf(removal);
      startingArray.splice(indexToSplice, 1);
    }
  }
  return startingArray
};

// Do not edit below this line
module.exports = removeFromArray;
