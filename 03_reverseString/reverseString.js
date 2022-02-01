const reverseString = function(string) {
  const stringArray = string.split(''); //might need to remove '' later
  const reversedArray = stringArray.reverse();
  let reversedString = reversedArray.join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
