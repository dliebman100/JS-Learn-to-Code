/**
 * JavaScript Review
 **/

/*
 * PROMPT 1:
 *
 * What's the difference between the =, ==, and ===?
 * const number = 2; an assignment
 * console.log(2 == "2"); checks the values and will return true BUT
 * console.log(2 === "2"); strict equals may see that certain strings are not the same type and return false
 */

/*
 * PROMPT 2:
 *
 * Declare 3 variables using each of let, const, and var.
 * let sum = a + b;
 * const addNums = sum();
 * var x = 5;
 */

/*
 * PROMPT 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add 5 to your variable
 *   - subtract 8 from your variable
 *   - multiply your variable by 7
 *   - divide your variable by 10
 *   - calculate the remainder of dividing your variable by 5
 * You're encouraged to print the output at each step to the console so you can see what's happening.
 */

// const calcSum = (sum) => {
//   sum += 5;
//   sum -= 8;
//   sum *= 7;
//   sum /= 10;
//   return sum;
// }
// console.log(calcSum(5));

/*
  PROMPT 4:
  Use a console.log to print out "Aloha! Hou, how're you doing today? " by using the given variables. 
  Try using 
  1. string concatenation
  2. template literals to construct your strings. 
  
  const name = "Hou";
  const greeting = "Aloha!";
*/
// const name = "Hou";
// const greeting = "Aloha!";

// const message = `${greeting} ${name}, how're you doing today? `;
// console.log(message);

/*
  PROMPT 5:
  Research as many ways as you can for adding 1 to the number variable.
  Then, console.log the phrase "1 + 1 is 2" by using the updated value of the number variable.
  For example, one way we can increment the number variable by 1 is by using this syntax:
  number = number + 1;
  console.log(`0 + 1 is ${number + 1}`);
  
  let number = 0;
*/

/*
  PROMPT 6:
  Use the typeof operator to find the data type of the following variables, formatting like so: "clearancePrice is a number"
  Mozilla Developer Network (MDN) is a widely popular JavaScript documentation: https://developer.mozilla.org/en-US/
  Try looking up how to use the typeof operator with Google. How would you structure your search term? Which websites are on the first page of the Google results?
  
  const lifeIsGood = true;
  const discount = 10;
  const myName = "Bob";
  const plant = { 
    name: "rose",
    color: "red",
  };
*/

/*
 * PROMPT 7:
 *
 * Write a function, using the function keyword. Call the function "difference". It should accept two numbers and compute their difference. 
 * 
 * If either of the input is not a number, the function should return an error instead: "Input(s) must be a number!"
 *
 * Examples: 
 * difference("hello", 3) // "Input(s) must be a number!"
 * difference(3, 5) // 2
 * difference(5, 3) // 2
 *
 * Now, write the same function using the arrow syntax.
 */

// const difference = (num1, num2) => {
//   let compute = num1 - num2;
//   return compute;
// }
// console.log(difference(2, 2));

/*
 * PROMPT 8:
 * Create a function called printMessageLength. This function should accept a parameter
 * called message. When invoked and passed a string, print 'The message: {message}
 * is 7 characters long'.
 *
 * Examples:
 * printMessageLength("hello") => "The message: hello is 5 characters long".
 * 
 * Remember you can always look things up in Google if you're unsure how to find the length of a string in JavaScript.
 *
 * Now, write the same function using the arrow syntax.
 * 
 * 
 */

// const printMessageLength = (message) => {
//   message = message.length;
//   return `The message is: ${message}`;
// };
// console.log(printMessageLength("hello"))

/*
 * PROMPT 9:
 * Update the printMessageLength() function that you created in the previous prompt such that if the message contains more than 10 characters, then it should output a different message.
 *
 * Examples:
 * printMessageLength("hello") => "The message: hello is 5 characters long".
 * printMessageLength("hello world") => "The message: hello world is too long!".
 *
 * Update the arrow version of your function too.
 */

// const printMessageLength = (message) => {
//   message = message.length;
//   if (message >= 10) {
//     return "Enter less characters!";
//   }
//   return "The message is: " + message;
// };
// console.log(printMessageLength("juxtaposition"))
/*
 * PROMPT 10:
 * Write a JavaScript function called greeting()
 * It should accept hour as the parameter
 * If the hour is less than 12, return a "Good morning" greeting
 * If the hour is between 12 and 18, return a "Good afternoon" greeting
 * If the hour is between 18 and 24, return a "Good night" greeting
 * Otherwise return "Invalid hour input".
 *
 * Now, write the same function using the arrow syntax.
 */
const getGreetingFunction = (hour) => {
  if (hour > 24 || hour < 0) {
    return "INVALID INPUT";
  }
  if (hour < 12) {
    return "Good morning, beautiful";
  } else if ((hour >= 12) && (hour < 18)) {
    return "Good afternoon";
  } else if ((hour >= 18) && (hour <= 24)) {
    return "Good night";
  } else {
    return "Invalid hour input";
  }
}
console.log(getGreetingFunction(18));

/*
 * PROMPT 11:
 *
 * Print "apple" from each of the arrays below to the console.
 */

// const array1 = ["apple", "pear", "strawberry", "grape"];
// const array2 = [
//   ["strawberry", "grape"],
//   ["rambutan", "durian"],
//   ["orange", "apple"]
// ];
// const array3 = [
//   ["strawberry", ["pineapple"]],
//   ["grape", ["pear", ["apple"], "kiwi"]]
// ];

// const printApples = (apples) => {
//   return apples.find(function (apple) {
//     return apple === "apple";
//   });
// }
// console.log(array1[0]);
// console.log(array2[2][1]);
// console.log(array3[1][1][1]);
/*
 * PROMPT 12:
 *
 * Print "f" to the console.
 *
 * const letters = ["a", "b", "c", "d", "e", "f"];
 */
// const letters = ["a", "b", "c", "d", "e", "f"];
// const getLetter = letters.filter(function (letter) {
//   return letter.indexOf('f') === 0;
// });
// console.log(getLetter);

/*
 * PROMPT 13:
 *
 * Use [array methods](https://www.w3schools.com/js/js_array_methods.asp) to answer the subprompts below.
 * - Remove "Hou" from the houInfo array
 * - Update "Cleveland" to "NYC"
 * - Add "Hou Chia" to the end of the array
 * The final array should look like this: ["Programming Instructor", "NYC", "Hou Chia"]
 * Please feel free to look up array methods that you can use to accomplish the transformation above.
 */

// const houInfo = ["Hou", "Programming Instructor", "Cleveland"];
// let popped = houInfo.pop();
// console.log(popped);
// console.log(houInfo);
// houInfo.push("NYC", "Hou Chia");
// console.log(houInfo);

/*
 * PROMPT 14:
 *
 * Write a for loop that counts from 0 to 10, printing each number to the
 * console.
 */

// for (let i = 0; i <= 10; i++){
//   console.log(i);
//   if (i === 10) {
//     console.log("Blast off!");
//   }
// }
/*
 * PROMPT 15:
 *
 * Write a for loop that counts down from 10 to 0, printing each number to the
 * console.
 */
// for (let i = 10; i >= 0; i--){
//   console.log(i);
// }

/*
 * PROMPT 16:
 *
 * Write a for loop that counts from 0 to 50 in increments of 2, printing each
 * number to the console.
 */

// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

/*
 * PROMPT 17:
 *
 * Write a for loop that counts from -10 to 10, printing each number to the
 * console.
 */
// for (let i = -10; i <= 10; i++) {
//     console.log(i)
// }

/*
 * PROMPT 18:
 *
 * 1. Create a variable called sum (make sure sum is defined outside of your loop).
 * 2. Create a loop that counts from 1 to 10, incrementing by 1.
 * 3. On each iteration of the loop, add i to the sum variable in step 1.
 * 4. After your loop, print the  * value of sum to the console.
 *
 */

// let sum = 0;
// for (let i = 1; i < 10; i++) {
//   sum += i;
// }
// console.log(sum);


/*
 * PROMPT 19:
 *
 * Create a function that counts from 0 to 10. 
 *    - If the value of i is even, print out "i is even"
 *    - otherwise, print out "i is odd"
 * How would you modify your function so that it counts from 0 to n, where n is a positive integer?
 */
// const calcOneToTen = () => {
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//       if (i === 0) {
//         continue;
//       }
//       console.log(`${i} is even`);
//     }
//     console.log(`${i} is odd`);
//   }
// }
// console.log(calcOneToTen(4));
/*
 * PROMPT 20:
 *
 * Use the `.forEach()` method to print out each item in the array below
 * 
 */

const letters = ["h", "i", "j", "k", "l", "m", "n"];

// return letters.forEach(function (letter) {
//   return console.log(letter);
// });

/*
 * PROMPT 21:
 *
 * Write a for loop that sums the values in the below array.
 */
const numbers = [32, 91, 34, 7, 12];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
/*
 * PROMPT 22:
 *
 * Write a function that accepts an array of numbers and returns the sum of the numbers in the array.
 * Test it out with different arrays to make sure it works properly.
 */

// const getArrayNums = (array) => {
//   let i = 0;
//   let sum = 0;
//   while (i < array.length) {
//     sum += array[i];
//     i++;
//   }
//   return sum;
// }
// console.log(getArrayNums([1, 2, 3, 4, 5]));

/*
 * PROMPT 22:
 *
 * Use a while loop to count from 0 to 150.
 */

// let counter = 0;
// while (counter <= 150) {
//   console.log(counter);
//   counter++;
// }
/*
 * PROMPT 24:
 *
 * Create a function called reverseString. This function should take
 * a parameter called message and return the string reversed (hint: look up some ways of doing this.)
 * Examples:
 * reverseString("hello") => olleh
 * reverseString("98765") => 56789
 *
 * If the function is invoked without an argument, default the message parameter to "hello"
 */

//letting i start @ the length of the array - 1 (last index would be by definition the last part of the array)
//letting i-- would end the condition of the loop (i > -1) 
const reverseString = (str) => {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}
// console.log(reverseString("hello"));
// console.log(reverseString("98765"));


/*
 * PROMPT 27:
 * Given the following array:
 * const numbers = [32, 91, 34, 7, 12]
 * 
 * Use an appropriate array iteration method to:
 * i. return an array of numbers greater than 30
 * ii. return the first element in the array that's greater than 30
 * iii. return the following transformed array:
 * [1024, 8281, 1156, 49, 144], where each element is the square of each number in the `numbers` array.
 */
const numbersArray = [32, 91, 34, 7, 12];

function getNumAboveThirty(arr) {
  let index = numbersArray.filter(function (number) {
    return number >= 30;
  });
}

function getFirstElement(arr) {
  let index = numbersArray.find(function (number) {
    return number[0];
  });
}

function getTransformedArray(arr) {
  let arrSquared = numbersArray.map(function (number) {
    return number * number;
  });
}
console.log(getNumAboveThirty());
console.log(getFirstElement());
console.log(getTransformedArray());


/*
 * PROMPT 28:
 *
 * Write a function, arrayify, that takes a string and returns an array of every word in the string.
 * arrayify("write a useful function") => ["write", "a", "useful", "function"]
 */

// const arrayify = (string) => {
//   Array.from(string).forEach(function(element){
//   console.log(element);
// });
// let result1 = arrayify("write a useful function");
// console.log(result1);

/*
  PROMPT 29:
  Write a function that logs all numbers from 1 - 100.
  - If a number is divisible by 3 log "Fizz" instead of the number.
  - If a number is divisible by 5 log "Buzz" instead of the number.
  - If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/
// const getFizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//   }
// }
// console.log(getFizzBuzz());