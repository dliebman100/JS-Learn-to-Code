//if person worked >40 hrs pay overtime 1.5x reg hours

//OPTION1
// let hrsWorked = 45;
// let payRate = 17.30;
// let overtimePay;
// let grossPay = (hrsWorked * payRate);
// if (hrsWorked > 40) {
//   overtimePay = (1.5 * payRate)
// }
// console.log(result);
//OPTION2
let hrsWorked = 45;
let payRate = 17.30;
let grossPay;
if (hrsWorked <= 40) {
  grossPay = hrsWorked * payRate;
}
else {
  grossPay = (40 * payRate) + ((hrsWorked - 40) * (payRate * 1.5));
}
console.log(grossPay);