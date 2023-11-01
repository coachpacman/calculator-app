let num1 = "";
let num2 = "";
let math = "";

const operations = {
  "addition": (a, b) => a + b,
  "subtraction": (a, b) => a - b,
  "multiplication": (a, b) => a * b,
  "division": (a, b) => a / b
}

const display = document.getElementById("display");
const numBtns = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

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

for (const operator of operators) {
  operator.addEventListener("click", e => {
    if (num2) {
      calculate(num1, num2);
      math = e.target.id;
    } else {
      math = e.target.id;
    }
  })
}

function calculate(param1, param2) {
  num1 = Number(param1);
  num2 = Number(param2);

  newNumber = operations[math](num1, num2);
  display.innerHTML = newNumber;
  num1 = newNumber;
  num2 = "";
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  math = "";
  display.innerHTML = "0";
}