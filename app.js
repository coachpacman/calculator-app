const display = document.getElementById("display");

//Add event listeners to all buttons
var numBtns = document.querySelectorAll(".number");

numBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    //display number that is clicked
    var curNumber = display.innerHTML;
    var btnNumber = e.target.innerHTML;
    var newNumber = curNumber.concat(btnNumber);
    display.innerHTML = newNumber
  })
})

//new number is num 1 + operator + num2
//num 1 is current value in display
//math function is value of operator button
//num 2 is next value in display
//next operator shows new value
//case switch statement based on operator selected
var num1;
var num2;
var operator;

function addition(num1, num2) {
  var newNumber;
  newNumber = num1 + num2
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