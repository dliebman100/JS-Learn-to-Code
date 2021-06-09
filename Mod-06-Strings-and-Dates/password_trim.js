"use strict"

// let password = "abc1_q!!";
//   if (password.length >= 8) {
//     console.log("password length okay");
//   }
//   else {
//     console.log("password too short!");
//   }

let username = "  dan  ";
let pwd = "dog  food  ";
console.log("*" + username + "*");
let usernameFromDB = "dan";
let passwordFromDB = "dog  food";
username = username.trim();
pwd = pwd.trim();
console.log("*" + username + "*");
if (username == usernameFromDB && pwd == passwordFromDB) {
    console.log("User logged in successfully");
}
else {
    console.log("Username and/or password is incorrect");
}

/*