"use strict";

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
console.log(getGreetingFunction(1));