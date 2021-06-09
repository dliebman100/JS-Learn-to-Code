"use strict"

window.onload = function() {
  //connect calculate Pay (hourly) button to event handler
  const calcPayBtn = document.getElementById("calcPayBtn");
  calcPayBtn.onclick = calcPayBtnClicked;

  const calcSalaryBtn = document.getElementById("calcSalaryBtn");
  calcSalaryBtn.onclick = calcSalaryBtnClicked;
}
function calcPayBtnClicked() {
  // Get hrsWorked of employeee from <input> field on the HTML 
  const hrsWorkedField = document.getElementById("hrsWorked");
  let hrsWorked = Number(hrsWorkedField.value);

  // Get payRate of employeee from <input> field on the HTML 
  let payRateField = document.getElementById("payRate");
  let payRate = Number(payRateField.value);
  
  // Calculate the user's pay using their hrsWorked x payRate  
  let grossPay;
  if (hrsWorked > 40) {
    grossPay = (payRate * 40) + ((hrsWorked - 40) * payRate * 1.5);
  }
  else {
    grossPay = hrsWorked * payRate;
  }
  // find the <input> that will hold the results 
  let message = "Yours gross pay is $" + grossPay.toFixed(2); 
  
  const resultField = document.getElementById("result");
  resultField.innerHTML = message;
}
function calcSalaryBtnClicked() {
  const payRateField = document.getElementById("payRate");
  let payRate = Number(payRateField.value);

  //calculate grossPay for salaried employees (40 hrs)
  let grossPay = payRate * 40;

  //generate output for grossPay and display in <p id="results"
  let message = "Yours gross pay is $" + grossPay.toFixed(2); 
  
  const resultField = document.getElementById("result");
  resultField.innerHTML = message;
}
