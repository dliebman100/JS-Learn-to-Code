"use strict"

function getSocSecTax(grossPay) {
	//accepts a gross pay and returns the SS tax on that amount
	//tax = 0.062 
	return grossPay * 0.062;
}
function getMedicareTax(grossPay) {
	//accepts a gross pay and returns the Med tax on that amount
	//tax = 0.0145
	return grossPay * 0.0145;
}
function getFederalTax(grossPay, withCode){
	//it accepts a gross pay and withholding code and returns the federal tax withholding on that amount
	let taxRate;
	let num = withCode;
		if (num == 0) {
			taxRate = grossPay * 0.23;
		} else if (num == 1) {
			taxRate = grossPay * 0.21;
		} else if (num == 2) {
			taxRate = grossPay * 0.195;
		} else if (num == 3) {
			taxRate = grossPay * 0.185;
		} else if (num == 4) {
			taxRate = grossPay * 0.18;
		} else if (num > 4) {
			//for each extra withholding code over 4 sub 0.005
			//EX: num == 5 formula is 0.18 - (1 * 0.005)
			let extraWithCode = num - 4;
			let newTaxRate = 0.18 - (extraWithCode * 0.005);  

			if (newTaxRate < 0) {
				newTaxRate = 0;
			}
			taxRate = grossPay * newTaxRate
		}
			taxRate = grossPay * ((0.18 - 0.05) * (num - 4)); 
	return taxRate;
}

//TEST CASES
let grossPay = 750;
let withholding = 0;
let person1 = getFederalTax(grossPay, withholding);
console.log("Person 1: " + "gross pay " + person1 + " withholding code " + ...);
let person2 = getFederalTax(750, 2);
// console.log("Person 2: " + "gross pay " + grossPay + " withholding code " + taxRate);
let person3 = getFederalTax(1110, 6);
// console.log("Person 3: " + "gross pay " + grossPay + " withholding code " + taxRate);