const sumAll = function (a, b) {
  // step 1: ensure each value is positive integer
  function isPositiveInteger(n) {
    return Number.isInteger(n) && n > 0;
  }

  if (!isPositiveInteger(a) || !isPositiveInteger(b)) {
    console.log("ERROR");
    return "ERROR";
  }
  // step 2: ensure ascending order
  function orderNumbers(a, b) {
    if (a > b) {
      return [b, a];
    }
    return [a, b];
  }
  // step 3: call corrected order, and iterate through integers with loop
  [a, b] = orderNumbers(a, b);
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
