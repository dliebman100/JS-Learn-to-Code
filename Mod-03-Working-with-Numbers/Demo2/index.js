"use strict";

window.onload = function(){
  let myButton = document.getElementById("myButton");
  myButton.onclick = myButtonClicked;
}


function myButtonClicked() {
  let num1Field = document.getElementById("num1");
  let num2Field = document.getElementById("num2");

  let num1 = Number(num1Field.value);
  let num2 = Number(num2Field.value);

  let sum = num1 + num2;
  alert("The sum is" + sum);
}