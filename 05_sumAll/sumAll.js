const sumAll = function(num1, num2) {
  let sum = 0;
  if ((typeof num1) !== 'number' || (typeof num2 !== 'number')) return 'ERROR';
  if (num1 > num2) [num1, num2] = [num2, num1]; //this can't be good?
  if (Math.sign(num1) === -1) return 'ERROR';
  for (let i=num1; i <= num2 ;i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
