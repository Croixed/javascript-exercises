const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};

const sum = function(arr) {
	let returnVal = 0;
  for (let i in arr) {
    returnVal += arr[i];
  };
  return returnVal;
};

const multiply = function(inputs) {
  let returnVal = 1;
  for (let i in inputs) {
    returnVal *= inputs[i];
  };
  return returnVal;
};

const power = function(num, exp) {
	return num **= exp;
};

const factorial = function(factor) {
	let returnVal = 1;
  for (let i = factor; i > 0; i--) {
    //technically multiplies in reverse order, but it shouldn't matter
    returnVal *= i;
  }
  return returnVal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
