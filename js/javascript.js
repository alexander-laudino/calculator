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
let first = document.getElementById("firstOperand").textContent;
let op = document.getElementById("operator").textContent;
let second = document.getElementById("secondOperand").textContent;
const equalButton = document.getElementById("equal");
const operatorButtons = document.querySelectorAll(".operations .operators");

digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (first === "" || (first.length > 0 && op === "")) {
      first = first + e.target.textContent;
      document.getElementById("firstOperand").textContent = first;
    } else {
      second = second + e.target.textContent;
      document.getElementById("secondOperand").textContent = second;
    }
  });
});

equalButton.addEventListener("click", () => {
  console.log(`${first} ${op} ${second}`);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (second === "") {
      op = e.target.textContent;
      document.getElementById("operator").textContent = op;
    }
  });
});
