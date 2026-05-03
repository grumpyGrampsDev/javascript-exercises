// use Math.round * 10 / 10 for decimal conversion
// toFixed(1) converts to a string :(

const convertToCelsius = function (num) {
  let tempC = (num - 32) * (5 / 9);
  let roundedC = Math.round(tempC * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function (num) {
  let tempF = num * (9 / 5) + 32;
  let roundedF = Math.round(tempF * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
