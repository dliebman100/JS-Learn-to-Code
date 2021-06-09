"use strict";
//HIGHER ORDER FUNCTIONS

const fruits = ["apples", "oranges", "pears", "lemons", "bananas", "pineapples"];

/*
1. Write a for loop to print each fruit to the console like this:
I love apples
I love oranges
I love pears
I love lemons
I love bananas
*/
// for (let i = 0; i < fruits.length; i++){
//     console.log(`I love ${fruits[i]}`);
// }
/*
2. forEach() 
Use a `.forEach()` method to do the same thing as 1 with a higher order function.

2a. Log the same message as the previous questions, but only for fruits with even-numbered indices

2b. What does forEach method return as an output? Does forEach return each element in the array or all elements in the array?
*/
// fruits.forEach(function(fruit){
//     console.log(`I love ${fruit}`);
// });

//you need the second parameter
// fruits.forEach((fruit, i) => {
//     if (i % 2 === 0){
//         console.log(`I love ${fruit}`);
//     } 
// });

// const numbers = [1,2,3,4,5];

// const output = numbers.forEach((number) => {
//     console.log(number); //produces a side effect
//     return number; //this does absolute shite!
// });
// console.log("output", output);

/*
3. Filter 
Return a list of all fruits that start with the letter "p"
*/

// let letterWithP = fruits.filter(function (fruit) {
//     return fruit[0].toLowerCase === "p";
// });
// console.log(letterWithP);

let filteredFruits = fruits.filter((fruit) => {
    return fruit.indexOf("p") === 0;
});
console.log(filteredFruits);

/*
4. Return the first fruit from the array that starts with the letter "p"
*/
// let result = fruits.find(function(fruit) {
//     return fruit[0] === 'p';
// });
// console.log(result);