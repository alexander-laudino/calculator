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

const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
};

const digitButtons = document.querySelectorAll(".digits .digit");

digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => console.log(e.target));
});

const equalButton = document.getElementById("equal");

equalButton.addEventListener("click", () => {
  let first = document.getElementById("firstOperand").textContent;
  let op = document.getElementById("operator").textContent;
  let second = document.getElementById("secondOperand").textContent;
  console.log(`${first} ${op} ${second}`);
});
