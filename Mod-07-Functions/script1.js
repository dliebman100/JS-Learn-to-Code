"use strict"

function getNumGrandKids(name) { // name is the parameter
  let num = 0;
    if (name == "Dana") {
    num = 6;
    }
    else if (name == "Karla") {
    num = 3;
    }
    else if (name == "Leslye") {
    num = 2;
    }
    return num;
    }
  let num = getNumGrandKids("Dana"); // "Dana" is argument
  console.log(num);
  num = getNumGrandKids("Karla");
  console.log(num);