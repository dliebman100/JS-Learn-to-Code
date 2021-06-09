"use strict";
/*Hou Chia's GitHub: 
https://gist.github.com/kchia/53499d1185d5ed33b1ece77834a50c11
*/

/*
1. What are some benefits of using an arrow function?
*/
// Function declaration syntax
// function add (a, b) {
//   return a + b;
// }
// // // Same function using the arrow syntax
// const add = (a, b) => {
//   return a + b;
// };
// // Even more concise - implicit return
// const add = (a, b) => a + b;

/*
2. Convert the anonymous function below to use the arrow function syntax:
*/
// const flowers = [
//     "rose",
//     "sunflower",
//     "daisy"
//   ];

// flowers.forEach(function(flower){
//     console.log(flower); 
//   });//const flowers = ["rose", "sunflower", "daisy"];

/*

3. Refactor the following functions to use the arrow function syntax:
*/
// function greeting(name) {
//     return `Hello, ${name}`;
// }
// const greeting = (name) => `Hello, ${name}`;
// console.log(greeting("Dan"))
// OR const greeting = (name) => {
//     return `Hello ${name}`;
// }

// function addNums(a, b, c) {
//let sum;
//     if (a < 0) {
//         let sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
//     } else {
//         let sum = a + b + c;
//     }
//     console.log(sum);
// }
// let addNums = (a, b, c) => {
//     let sum;
//     if (a < 0) {
//         sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
//     } else {
//         sum = a + b + c;
//     }
//     console.log(sum);
// }
// console.log(addNums(1, 2, 3));

//Refactor of addNums:
// let addNums = (a, b, c) => {
//     let sum = a < 0 ? Math.abs(a) + Math.abs(b) + Math.abs(c) : a + b + c;
//     console.log(sum);
// }
// addNums(1,2,3);

//implicit return
// let addNumsWithImplicitReturn = (a, b, c) => {
//     a < 0 ? Math.abs(a) + Math.abs(b) + Math.abs(c) : a + b + c;
// }
// addNums(1, 2, 3);
/*************************
******Array Iteration*****
.find(), .forEach(), map()
**************************/
let carIds = [{
    carId: 123,
    style: "sedan"
  },
  {
    carId: 456,
    style: "convertible"
  },
  {
    carId: 789,
    style: "sedan"
  },
  {
    carId: 101,
    style: "minivan"
  }
];

/*
1. Use the .forEach() method to log every car to the console. Sample Output:
*/
// carIds.forEach(function(car){
//     console.log(car);
// }); 
//carIds.forEach(car => console.log(car));

/*
2. Use the .forEach() method to log every car's id to the console. Sample Output:
*/
// carIds.forEach(car => console.log(car.carId));

// carIds.forEach(function(car){
//     console.log(car.carId)
// });

/*
3. Use the .forEach() method to log the following message to the console for every car. Sample Output:
*/
// Dear customer, car 123 is a sedan.
// Dear customer, car 456 is a convertible.
// Dear customer, car 789 is a sedan.
// Dear customer, car 101 is a minivan.

// carIds.forEach(car => console.log(`Dear customer, ${car.carId} is a ${car.style}`));

/*
4. Log the same message as the previous questions, but only for cars with even-numbered indices in the carsId array. Sample Output:
*/
// Dear customer, car 123 is a sedan.
// Dear customer, car 789 is a sedan.

//two params in function
// carIds.forEach((car, i) => (i % 2 === 0) ? console.log(`Dear customer, ${car.carId} is a ${car.style}`) : null);

/*
5. Use the .filter() method to log all minivans to the console. What kind of output is returned from the .filter() method? Sample Output:
*/
// [ { carId: 101, style: 'minivan' } ]
// let minivanId = carIds.filter(car => car.style === 'minivan');
// console.log(minivanId);

/*
6. Use the .find() method to find and log the first sedan encountered in the array to the console. What kind of output is returned from the .find() method? How does this differ from the .filter() method? Sample Output:
*/
// { carId: 123, style: 'sedan' }
// let result = carIds.find(function(car){
//     return car.style === "sedan";
// });
// console.log(result);

/*
7. Use the .find() method to find and log a car with a carId less than 200. Which of the cars in the array satisfy this criteria? How many cars are returned in the output?
*/
// let result = carIds.find(function (car) {
//     return car.carId > 200;
// });
// console.log(result);

/*
8. .forEach() has a closely related method called .map(). The .map() method iterates through an array and creates a new array populated with the results of calling a provided function on every element in the array.
*/
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => {
//     return number * 2;
//   });

//   console.log(doubled); //[2, 4, 6, 8, 10]

// const doubled = numbers.map((number, index) => {
//     console.log("index", index);
//     return number * 2;
// });

// console.log(doubled);

/*
9. Convert carIds from an array of objects into an array of strings 
*/
const mapped = carIds.map(function (car) {
  return `car ${car.carId} is a ${car.style}`;
});

console.log(mapped)
/*************************
 Variables & Block Scopes
 **************************/
/*
1. What is block scope?
*

2. What kind of scope does the following code have?
{
  // What kind of scope is this?
}

*BLOCK SCOPE

3. What is function scope? What is the difference between block scope versus function scope?

*Function scope is the scope created for each function that doesn't "leak out". 

4. What will get logged to the console and why?
let isSunny = true;

if(isSunny) {
  let greeting = "Today is a sunny day!";
}

console.log(greeting);

* greeting is a local variable and isn't defined outside the if statement, will get a referenceError 
*/

/*
5. What will get logged to the console and why?
let isSunny = true;

if(isSunny) {
  var greeting = "Today is a sunny day!";
}

console.log(greeting);

*might get an error that greeting is not defined.

6. What will get logged to the console and why?
for(var j = 1; j <= 100; j++) {}
console.log(j);

*101
Scope is defined in the for loop

*/

/*
7. What will get logged to the console and why?

const answer = 42;
answer = 43;
console.log(answer);

*Answer is not declared it's just reassigned
*/

/*
8. What will get logged to the console and why?

const person = {
  firstName: "John",
  lastName: "Doe",
};

person.firstName = "Jane";
console.log(person);

*{firsName; 'Jane', lastName: 'Doe'}
You're printing the entire person object
*/

/*
9. What will get logged to the console and why?
const person = {
  firstName: "John",
  lastName: "Doe",
};

person = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log(person);

*Will NOT work because you can't declare a const variable twice (TypeError)
*/

/*************************
 ******Object Literals******
 **************************/

/*
1. What will be logged to the console in each case and why?

const personProperty = "lastName";
const person = {
  firstName: "Hou",
  [personProperty]: "Chia",
}
console.log(person.personProperty);
console.log(person.lastName);

*personProperty is logged illegally since it's not an object (prints undefined). And person.lastName will print "Chia"
*/


/*
2. How would you refactor the lastName property of the following object to use a shorter syntax?

const lastName = "Chia";
const person = {
  firstName: "Hou",
  lastName: lastName,
}
*/

// const lastName = "Chia";
// const person = {
//   firstName: "Hou",
//   lastName,
// };
// console.log(person.firstName);


/*************************
Destructuring and Rest/Spread
 **************************/

/*
1. Destructure the name, title, and city properties of the following object:

const person = {
  name: "Hou Chia",
  title: "software engineer",
  city: "Cleveland, OH",
};

// solution here
const person = {(person)} =>
()

console.log(name); // outputs "Hou Chia"
console.log(title); // outputs "software engineer"
console.log(city); // outputs "Cleveland, OH"
*/

/*
2. What will be logged to the console and why?
const [first, second, , fourth] = [10, 20, 30, 40];
console.log(first);
console.log(second);
console.log(fourth);
*/
// double commas skips the 3rd item in the array

/*
3. What will be logged to the console and why?

const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first);
console.log(restOfItems);
*/

// array destructuring with new array of restOfItems [20, 30, 40] (splits array to filter out certain properties)

/*
4. What will be logged to the console in each case and why?

const person = {
  firstName: "John",
  lastName: "Doe",
  title: "instructor",
  city: "Miami, FL",
};
const { firstName, lastName, ...otherInfo } = person;
console.log(firstName, lastName, otherInfo);

*removes the firstName and lastName from the original object with spread operator. Then creates a new object with the rest of the properties (title, city).
*/

/*
5. Use the spread operator to make a copy of the following array:

const numbers = [1, 2, 3, 4, 5];

// solution here
let newNumbers = [...numbers]
console.log(newNumbers) // should output [1, 2, 3, 4, 5]
*/

/*
6. Use the spread operator to clone the title and city properties from the person object into the newPerson object:

const person = {
  firstName: "John",
  lastName: "Doe",
  title: "instructor",
  city: "Miami, FL",
};

const newPerson = { ...title, ...city};

console.log(newPerson) // should output { firstName: "Jane", lastName: "Random", title: "instructor", city: "Miami, FL" } 
*/