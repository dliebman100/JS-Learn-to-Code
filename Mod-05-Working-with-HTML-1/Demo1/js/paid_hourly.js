"use strict";
window.onload = function() {
   const calcPayBtn = document.getElementById("calcPayBtn");
   calcPayBtn.onclick = calcPayBtnClicked;
}
function calcPayBtnClicked() {
    // get value for pay rate from <input> element
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);
    // get value for hours worked from <input> element
    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);
    // find out if they are hourly
    const hourlyCheckbox = document.getElementById("hourly");    
    let isHourly = hourlyCheckbox.checked;
    // get the gross pay
    let grossPay = calcGrossPay(payRate, hrsWorked, isHourly);
    // get the benefit cost
    const insuranceCheckbox = document.getElementById("insurance");
    const busPassCheckbox = document.getElementById("busPass");
    const retirementCheckbox = document.getElementById("retirement");
    let benefitsCost = calcBenefitsCost(insuranceCheckbox.checked, 
        busPassCheckbox.checked, retirementCheckbox.checked, grossPay);
    // get the taxes
    const yesTaxesRadioBtn = document.getElementById("yesTaxes");
    let taxes = calcTaxes(yesTaxesRadioBtn.checked, grossPay);
    // calculate net pay
    let netPay = grossPay - benefitsCost - taxes; 
    // put gross pay in <p id="grossPay">
    const grossPayPara = document.getElementById("grossPay");
    grossPayPara.innerHTML = "Your gross pay is $" + grossPay.toFixed(2);
    // put benefit costs in <p id="benefitsCost">
    const benefitsCostPara = document.getElementById("benefitsCost");
    benefitsCostPara.innerHTML = "Your benefits cost is $" + benefitsCost.toFixed(2);
    // put taxes in <p id="taxes">
    const taxesPara = document.getElementById("taxes");
    taxesPara.innerHTML = "Your taxes are $" + taxes.toFixed(2);
    // put net pay total in <p id="netPay">
    const netPayPara = document.getElementById("netPay");
    netPayPara.innerHTML = "Your net pay is $" + netPay.toFixed(2);
}
// -------------------------------------------------------
function calcGrossPay(payRate, hrsWorked, isHourly) {
    let grossPay;
    // if they are paid hourly this means they MIGHT get overtime, 
    // but only if they work 40+ hours, otherwise they are paid 
    // the number of hours they work
    if (isHourly == true) {
        if (hrsWorked > 40) {
            grossPay = (payRate * 40) + (hrsWorked - 40) * 1.5 * payRate;
        }
        else {
            grossPay = payRate * hrsWorked;
        }
    }
    else {
        // if they are not hourly, we assume they are salaried and pay
        // for 40 hours no matter how many they really work
        grossPay = payRate * 40;
    }
    return grossPay;
}
// -------------------------------------------------------
function calcBenefitsCost(wantInsurance, wantBusPass, want401K, grossPay) {
    let benefitsCost = 0;
    if (wantInsurance == true) {
        benefitsCost += 25;
    }
    if (wantBusPass == true) {
        benefitsCost += 15.00;
    }
    if (want401K == true) {
        benefitsCost += (grossPay * .03);
    }
    return benefitsCost;
}
// -------------------------------------------------------
function calcTaxes(wantToPayTaxes, grossPay) {
    let taxes = 0;
    if (wantToPayTaxes == true) {
        taxes = grossPay * .10;
    }
    return taxes;
}