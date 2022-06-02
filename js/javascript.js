const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operator) {
  switch (operator) {
    case "+":
      console.log("Add");
      break;
    case "-":
      console.log("Subtract");
      break;
    case "*":
      console.log("Multiply");
      break;
    case "/":
      console.log("Divide");
      break;
  }
};
