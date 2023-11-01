//used for performing math functions. I assume all math functions follow form num1, math operator, num2
var num1 = "";
var num2 = "";
var math = "";

//for clearing values in CE button
function clearDisplay() {
  num1 = "";
  num2 = "";
  math = "";
  display.innerHTML = "0";
}

//used for displaying values in calculator
const display = document.getElementById("display");

//Number button event listeners. Values will concatenate if a math operand hasn't been identified
var numBtns = document.querySelectorAll(".number");

numBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    if (math) { //if there is a math operation, assume that we're updating num2 
      
      //display number that is clicked
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

//Performs current math operation, then updates num1 with new calculated value and clears num2 for next number value
function calculate(param1, param2) {
  num1 = Number(param1);
  num2 = Number(param2);
  switch(math) {
    case "addition":
      newNumber = num1 + num2;
      display.innerHTML = newNumber;
      num1 = newNumber;
      num2 = "";
      break;
    case "subtraction":
      newNumber = num1 - num2;
      display.innerHTML = newNumber;
      num1 = newNumber;
      num2 = "";
      break;
    case "multiplication":
      newNumber = num1 * num2;
      display.innerHTML = newNumber;
      num1 = newNumber;
      num2 = "";
      break;
    case "division":
      newNumber = num1 / num2;
      display.innerHTML = newNumber;
      num1 = newNumber;
      num2 = "";
      break;
  }
}

//Math operator event listeners. If num2 exists, perform current math operation and then update math operator
document.getElementById("addition").addEventListener("click", function(e) {
  if (num2) {
    calculate(num1, num2);
    math = "addition"
  } else {
    math = "addition"
  }
})

document.getElementById("subtraction").addEventListener("click", function(e) {
  if (num2) {
    calculate(num1, num2);
    math = "subtraction"
  } else {
    math = "subtraction"
  }
})

document.getElementById("multiplication").addEventListener("click", function(e) {
  if (num2) {
    calculate(num1, num2);
    math = "multiplication"
  } else {
    math = "multiplication";
  }
})

document.getElementById("division").addEventListener("click", function(e) {
  if (num2) {
    calculate(num1, num2);
    math = "division"
  } else {
    math = "division"
  }
})



