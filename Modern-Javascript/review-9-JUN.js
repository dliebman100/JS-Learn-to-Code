"use strict";

/* 1.
What will be logged to the console?
*/
const [chore, ...otherChores] = [
    "clean windows",
    "take out trash",
    "clean dining room",
    "make bed"
];
console.log("=================");
console.log("QUESTION 1");
console.log("=================");
console.log(chore);
console.log(otherChores);

// ...spread operator destructures a new array of otherChores ["take out trash", "clean dining room", "make bed"] (splits array to filter out certain properties)
// clean windows
// [ 'take out the trash', 'clean dining room', 'make bed']

/* 2.
Destructure `zipcode`, `city`, and `street` from the following object:
*/

const address = {
    zipcode: "10001",
    city: "NYC",
    street: "Walker St.",
};

const {
    zipcode,
    city,
    street
} = address;
console.log("=================");
console.log("QUESTION 2");
console.log("=================");
console.log(zipcode, city, street);


/* 3.
i. Make a copy/clone of the `address` object above. 
ii. Add a new property called `apartmentNumber` (which can be set to any string of your choice) to the clone. 
iii. Update the `city` property in the clone to `Cleveland`.
*make a copy of object before performing logic on data
*/
console.log("=================");
console.log("QUESTION 3");
console.log("=================");

//Make a copy/clone of the `address` object above. 
const newAddress = {
    ...address
};
console.log("newAddress", newAddress);

//Add a new property called `apartmentNumber` (which can be set to any string of your choice) to the clone. 
newAddress.apartmentNumber = '123A';
console.log("newAddress with apartmentNumber", newAddress);

//Update the `city` property in the clone to `Cleveland`.
newAddress.city = "Cleveland";
console.log("newAddress with updated city", newAddress);


// const newAddressV2 = {
//     city: "Cleveland",
//     ...address,
//     apartmentNumber: "12323A",
// };
// console.log("newAddressV2", newAddressV2);