let display = document.querySelector("#display");
let numButtons = Array.from(document.querySelectorAll(".num"));
let operButtons = Array.from(document.querySelectorAll(".oper"));
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

operButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
  });
});

equalsButton.addEventListener("click", compute);
clearButton.addEventListener("click", clear);

function appendNumber(number) {
  if (display.textContent === "0") {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function chooseOperation(operator) {
  if (currentOperation !== null) compute();
  firstOperand = display.textContent;
  currentOperation = operator;
  display.textContent = "0";
}

function compute() {
  secondOperand = display.textContent;
  display.textContent = operate(currentOperation, firstOperand, secondOperand);
  currentOperation = null;
}

function clear() {
  display.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === "0") {
    return "Error! Divide by 0";
  } else {
    return a / b;
  }
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      if (b !== 0) {
        return divide(a, b);
      } else {
        return "Error! Divide by 0";
      }
    default:
      return null;
  }
}
