const display = document.getElementById("display");
var newNumber;
var nextNumber;
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

//new number is num 1 + operator + num2
//num 1 is current value in display
//math function is value of operator button
//num 2 is next value in display
//next operator shows new value
//case switch statement based on operator selected

document.getElementById("addition").addEventListener("click", function(e) {
  math = "addition";
  num1 = display.innerHTML;
})


function calculate(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch(math) {
    case "addition":
      newNumber = num1 + num2;
      display.innerHTML = newNumber;
      math = "";
  }
}


// document.getElementById("btn-nine").addEventListener("click", function(e) {
//   var curNumber = display.innerHTML;
//   var btnNumber = e.target.innerHTML;
//   var newNumber = curNumber.concat(btnNumber);
//   display.innerHTML = newNumber
// })



// function calculate() {
//   document.getElementById("display").innerHTML = "new text";
  
  
//   //when operator is clicked, perform operation, but keep display number
//   //When new number is clicked, only show new number, not result
//   //if equal or new operator is clicked, show result
// }

// calculate();