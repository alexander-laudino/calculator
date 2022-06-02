const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (numbers) {
  return numbers.reduce((total, current) => total * current);
};

const divide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  return a ** b;
};
