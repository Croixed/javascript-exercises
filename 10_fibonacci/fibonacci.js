const fibonacci = function(num) {
  if (Math.sign(num) === -1) {return "OOPS"}; // filter out -s
  num = Number(num); // filter strings
  const fibArr = [1, 1];
  for (let i = 1; i < num - 1; i++) {
    let val1 = fibArr[fibArr.length - 1];
    let val2 = fibArr[fibArr.length - 2];
    fibArr.push(val1 + val2)
  }
  return fibArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
