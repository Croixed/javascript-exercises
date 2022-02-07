const palindromes = function (inputString) {
  //regex to filter out all non alphanumeric in input
  //then split, reverse, and rejoin the array and assign it to rev
  inputString = inputString.replace(/\W/g, '').toLowerCase();
  revString = inputString.split('').reverse().join('');
  return (inputString === revString) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
