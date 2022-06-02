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
  button.addEventListener("click", (e) => console.log(e.target.textContent));
});

const equalButton = document.getElementById("equal");

equalButton.addEventListener("click", () => {
  const first = document.getElementById("firstOperand").textContent;
  const op = document.getElementById("operator").textContent;
  const second = document.getElementById("secondOperand").textContent;
  console.log(`${first} ${op} ${second}`);
});

const operatorButtons = document.querySelectorAll(".operations .operators");

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => console.log(e.target.textContent));
});
