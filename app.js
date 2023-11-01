//used for performing math functions. I assume all math functions follow form num1, math operator, num2
let num1 = "";
let num2 = "";
let math = "";

function clearDisplay() {
  num1 = "";
  num2 = "";
  math = "";
  display.innerHTML = "0";
}

const display = document.getElementById("display");

//Number button event listeners. Values will concatenate if a math operand hasn't been identified
const numBtns = document.querySelectorAll(".number");

numBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    if (math) {
      const btnNumber = e.target.innerHTML;

      //if additional number is clicked, show concatenated number; ex: press 1, press 1, display 11
      num2 = num2.concat(btnNumber);
      display.innerHTML = num2
    } else {
      const btnNumber = e.target.innerHTML;
      num1 = num1.concat(btnNumber);
      display.innerHTML = num1
    }
  })
})

const operations = {
  "addition": (a, b) => a + b,
  "subtraction": (a, b) => a - b,
  "multiplication": (a, b) => a * b,
  "division": (a, b) => a / b
}

//Performs current math operation, then updates num1 with new calculated value and clears num2 for next number value
function calculate(param1, param2) {
  num1 = Number(param1);
  num2 = Number(param2);

  newNumber = operations[math](num1, num2);
  display.innerHTML = newNumber;
  num1 = newNumber;
  num2 = "";
}

//Math operator event listeners. If num2 exists, perform current math operation and then update math operator
const operators = document.querySelectorAll(".operator");

for (const operator of operators) {
  operator.addEventListener("click", e => {
    if (num2) {
      calculate(num1, num2);
      math = e.target.id;
    } else {
      math = e.target.id;
    }
  })
