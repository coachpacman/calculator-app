const display = document.getElementById("display");
var num1 = "";
var num2 = "";
var math = "";

//Add event listeners to all buttons
var numBtns = document.querySelectorAll(".number");

numBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    if (math) {
      btnNumber = e.target.innerHTML;
      num2 = num2.concat(btnNumber);
      display.innerHTML = num2
    } else {
      //display number that is clicked
      const btnNumber = e.target.innerHTML;
      
      //if additional number is clicked, show concatenated number; ex: press 1, press 1, display 11
      num1 = num1.concat(btnNumber);
      display.innerHTML = num1
    }
  })
})

//Event listeners for all math operator buttons
document.getElementById("addition").addEventListener("click", function(e) {
  math = "addition";
  if (num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    num1 = num1 + num2;
    num2 = ""
    display.innerHTML = num1;
    // continuousCalc(num1,num2); shows concatenated numbers
  }
})

document.getElementById("subtraction").addEventListener("click", function(e) {
  math = "subtraction";
  if (num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    num1 = num1 - num2;
    num2 = ""
    display.innerHTML = num1;
    // continuousCalc(num1,num2); shows concatenated numbers
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
  math = "division";
  if (num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    num1 = num1 / num2;
    num2 = ""
    display.innerHTML = num1;
    // continuousCalc(num1,num2); shows concatenated numbers
  }
})

function calculate(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch(math) {
    case "addition":
      newNumber = num1 + num2;
      display.innerHTML = newNumber;
      num1 = newNumber;
      num2 = ""
      break;
    case "subtraction":
      newNumber = num1 - num2;
      display.innerHTML = newNumber;
      math = "";
      break;
    case "multiplication":
      newNumber = num1 * num2;
      display.innerHTML = newNumber;
      math = "";
      break;
    case "division":
      newNumber = num1 / num2;
      display.innerHTML = newNumber;
      math = "";
      break;
  }
}

function continuousCalc(num1,num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  num1 = num1 + num2;
  num2 = ""
  display.innerHTML = num1;
}

