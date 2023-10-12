//if number button is clicked, display number in display
  //add event listener to all buttons
    //add event listener to all number buttons
      //add event listener to the number nine
  //event listener updates display html
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