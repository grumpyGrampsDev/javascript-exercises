const leapYears = function (num) {
  let year = num;
  // 1. It is divisible by 4,
  // 2. except years divisible by 100,
  // 3. unless they are also divisible by 400.
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
