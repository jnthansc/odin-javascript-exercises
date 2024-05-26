const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== 'number' ||
    typeof num2 !== 'number'
  ) {
    return 'ERROR';
  }

  let lowerBound = num1;
  let upperBound = num2;

  if (num1 > num2) {
    lowerBound = num2;
    upperBound = num1;
  }

  let sum = 0;

  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
