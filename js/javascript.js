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

const calculateValue = function () {
  first = operate(op, parseFloat(first), parseFloat(second));
  first = parseFloat(first.toFixed(8)).toString();
  op = "";
  second = "";
  document.getElementById("firstOperand").textContent = `${first}`;
  if (first[0] === "-") {
    isFirstNeg = true;
  } else {
    isFirstNeg = false;
  }
  document.getElementById("operator").textContent = op;
  document.getElementById("secondOperand").textContent = second;
  isSecondNeg = false;
};

const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const percentButton = document.getElementById("percent");
const digitButtons = document.querySelectorAll(".digits .digit");
const plusMinusButton = document.getElementById("plusMinus");
const dotButton = document.getElementById("dot");
const operatorButtons = document.querySelectorAll(".operations .operators");
const equalButton = document.getElementById("equal");
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "*", "/"];

let first = document.getElementById("firstOperand").textContent;
let op = document.getElementById("operator").textContent;
let second = document.getElementById("secondOperand").textContent;
let isFirstFloat = false;
let isFirstPercent = false;
let isFirstNeg = false;
let isSecondFloat = false;
let isSecondPercent = false;
let isSecondNeg = false;

clearButton.addEventListener("click", () => {
  first = "";
  op = "";
  second = "";
  document.getElementById("firstOperand").textContent = first;
  document.getElementById("operator").textContent = op;
  document.getElementById("secondOperand").textContent = second;
  isFirstFloat = false;
  isFirstPercent = false;
  isFirstNeg = false;
  isSecondFloat = false;
  isSecondPercent = false;
  isSecondNeg = false;
});

backspaceButton.addEventListener("click", () => {
  if (op === "") {
    if (first.slice(-1) === ".") {
      isFirstFloat = false;
    }
    first = first.slice(0, -1);
    document.getElementById("firstOperand").textContent = first;
  } else if (op.length > 0 && second === "") {
    op = "";
    document.getElementById("operator").textContent = op;
  } else if (op.length > 0 && second.length > 0) {
    if (second.slice(-1) === ".") {
      isSecondFloat = false;
    }
    second = second.slice(0, -1);
    document.getElementById("secondOperand").textContent = second;
  }
});

percentButton.addEventListener("click", () => {
  if (!isFirstPercent && op === "" && first.length > 0) {
    first = first / 100;
    isFirstFloat = true;
    isFirstPercent = true;
    document.getElementById("firstOperand").textContent = `${first}`;
  } else if (!isSecondPercent && op.length > 0 && second.length > 0) {
    second = second / 100;
    isSecondFloat = true;
    isSecondPercent = true;
    document.getElementById("secondOperand").textContent = `${second}`;
  }
});

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

plusMinusButton.addEventListener("click", () => {
  if (op === "") {
    if (isFirstNeg) {
      first = first.slice(1);
      document.getElementById("firstOperand").textContent = first;
      isFirstNeg = false;
    } else {
      first = "-" + first;
      document.getElementById("firstOperand").textContent = first;
      isFirstNeg = true;
    }
  } else if (op.length > 0) {
    if (isSecondNeg) {
      second = second.slice(1);
      document.getElementById("secondOperand").textContent = second;
      isSecondNeg = false;
    } else {
      second = "-" + second;
      document.getElementById("secondOperand").textContent = second;
      isSecondNeg = true;
    }
  }
});

dotButton.addEventListener("click", (e) => {
  if (!isFirstFloat && op === "") {
    first = first + e.target.textContent;
    document.getElementById("firstOperand").textContent = first;
    isFirstFloat = true;
  } else if (!isSecondFloat && op.length > 0) {
    second = second + e.target.textContent;
    document.getElementById("secondOperand").textContent = second;
    isSecondFloat = true;
  }
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (second.length > 0) {
      calculateValue();
      op = e.target.textContent;
      document.getElementById("operator").textContent = op;
    } else if (second === "") {
      op = e.target.textContent;
      document.getElementById("operator").textContent = op;
    }
  });
});

equalButton.addEventListener("click", () => {
  if (first !== "" && op !== "" && second !== "") {
    calculateValue();
  }
});

let x;

window.addEventListener("keydown", (e) => {
  if (digits.includes(e.key)) {
    if (first === "" || (first.length > 0 && op === "")) {
      first = first + e.key;
      document.getElementById("firstOperand").textContent = first;
    } else {
      second = second + e.key;
      document.getElementById("secondOperand").textContent = second;
    }
  } else if (operators.includes(e.key)) {
    if (second.length > 0) {
      calculateValue();
      op = e.key;
      document.getElementById("operator").textContent = op;
    } else if (second === "") {
      op = e.key;
      document.getElementById("operator").textContent = op;
    }
  } else if (e.key === "Enter" && first !== "" && op !== "" && second !== "") {
    calculateValue();
  }
});
