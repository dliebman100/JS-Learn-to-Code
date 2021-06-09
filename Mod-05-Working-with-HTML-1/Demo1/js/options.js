"use strict"

window.onload = function() {
  //connect calculate Pay (hourly) button to event handler
  const calcPayBtn = document.getElementById("calcPayBtn");
  calcPayBtn.onclick = calcPayBtnClicked;
}

function calcPayBtnClicked() {
  // Get hrsWorked of employeee from <input> field on the HTML 
  const hrsWorkedField = document.getElementById("hrsWorked");
  let hrsWorked = Number(hrsWorkedField.value);

  const payRateField = document.getElementById("payRate");
  let payRate = Number(payRateField.value);
  
  // Calculate the user's pay using their hrsWorked x payRate  
  //using .checked method
  //if checkbox is checked they are paid hourly (they might get overtime)
  //otherwise they are paid the number of hours
  let grossPay;
  const hourlyBox = document.getElementById("hourly");
  
  if (hourlyBox.checked == true) {
    if (hrsWorked > 40) {
      grossPay = (payRate * 40) + (hrsWorked - 40) * payRate * 1.5;
    }
    else {
      grossPay = payRate * hrsWorked;
    }
  }
  else {
    grossPay = payRate * 40;
  }
  //paragraphs, divs, spans use innerHTML
  let benefitsCost = 0;
  const insuranceCheckbox = document.getElementById("insurance");
  if (insuranceCheckbox.checked == true) {
    benefitsCost += 25
  }

  const busPassCheckbox = document.getElementById("busPass");
  if (busPassCheckbox.checked == true) {
    benefitsCost += 12.50;
  }

  const retirementCheckbox = document.getElementById("retirement");
  if (retirementCheckbox.checked == true) {
    benefitsCost += (grossPay * .03);
  }
  
  let taxes = 0;
  const yesTaxesRadioBtn = document.getElementById("yesTaxes");
  if (yesTaxesRadioBtn.checked == true) {
    taxes = grossPay * .10;
  }

  let netPay = grossPay - benefitsCost - taxes;

  //put gross pay in <p id="grossPay">
  const grossPayPara = document.getElementById("grossPay");
  grossPayPara.innerHTML = "Yours gross pay is $" + grossPay.toFixed(2);

  //put benefit costs in <p id="benefitsCost">
  const benefitsCostPara = document.getElementById("benefitsCost");
  benefitsCostPara.innerHTML = "Your benefits cost is $" + benefitsCost.toFixed(2);

  const taxesPara = document.getElementById("taxes");
  taxesPara.innerHTML = "Your taxes cost is $" + taxes.toFixed(2);

  //put netPay in <p id="netPay">
  const netPayPara = document.getElementById("netPay");
  netPayPara.innerHTML = "Your net pay is $" + netPay.toFixed(2);


}