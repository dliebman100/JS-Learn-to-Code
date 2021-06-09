"use strict"

window.onload = function() {
  const addBtn = document.getElementById("addBtn");
  addBtn.onclick = addBtnClicked;

  const subBtn = document.getElementById("subBtn");
  subBtn.onclick = subBtnClicked;

  const mulBtn = document.getElementById("mulBtn");
  mulBtn.onclick = mulBtnClicked;

  const divBtn = document.getElementById("divBtn");
  divBtn.onclick = divBtnClicked;
}
function addBtnClicked() {
  // Get add input from <input> id field on the HTML 
  const numOneField = document.getElementById("numOne");
  let numOne = Number(numOneField.value);

  const numTwoField = document.getElementById("numTwo");
  let numTwo = Number(numTwoField.value);

  let result = numOne + numTwo;

  const resultField = document.getElementById("answer");
  resultField.value = result;
}
function subBtnClicked() {
  // Get sub input from <input> id field on the HTML 
  const numOneField = document.getElementById("numOne");
  let numOne = Number(numOneField.value);

  const numTwoField = document.getElementById("numTwo");
  let numTwo = Number(numTwoField.value);

  let result = numOne - numTwo;

  const resultField = document.getElementById("answer");
  resultField.value = result;
}
function mulBtnClicked() {
  // Get multiply input from <input> id field on the HTML 
  const numOneField = document.getElementById("numOne");
  let numOne = Number(numOneField.value);

  const numTwoField = document.getElementById("numTwo");
  let numTwo = Number(numTwoField.value);

  let result = numOne * numTwo;

  const resultField = document.getElementById("answer");
  resultField.value = result;
}
function divBtnClicked() {
  // Get div input from <input> id field on the HTML 
  const numOneField = document.getElementById("numOne");
  let numOne = Number(numOneField.value);

  const numTwoField = document.getElementById("numTwo");
  let numTwo = Number(numTwoField.value);

  let result = numOne / numTwo;

  const resultField = document.getElementById("answer");
  resultField.value = result;
} 
