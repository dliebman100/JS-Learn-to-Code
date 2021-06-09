"use strict"

function displayMailingLabel(name, address, city, zip) {
  let firstLine = name; //needs to be a string ie firstLine = "new sentence"
    // let words = firstLine.split(" ");
    // for (let i = 0; i < words.length; i++){
    //   words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // }
    // words.join(" ");
  let secondLine = address;
  let thirdLine = city;
  let fourLine = zip;
  console.log(firstLine);
  console.log(address);
  console.log(city);
  console.log(zip);
}
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}
function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;
  let message = "INVALID AMOUNT";
  if (amountPaid < totalDue) {
    changeDue = message;
  } else if (amountPaid == 0) {
    changeDue = message;
  } else {
    changeDue = changeDue.toFixed(2);
  }
  console.log("Total Due: " + totalDue.toFixed(2));
  console.log("Amount Paid: " + amountPaid.toFixed(2));
  console.log(" ");
  console.log("Change Due: " + changeDue);
}

displayMailingLabel("dan lipsem orum", "123 Fake Street" ,"Cityville" , "Megakota", "fffff");
addNumbers(1,2);
displayReceipt(20,2);