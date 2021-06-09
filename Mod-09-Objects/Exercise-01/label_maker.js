"use strict";

let labelMaker = {
  name: "Boaty McBoatFace",
  address: " 123 Under the sea",
  city: "Atlantis",
  state: "GA",
  zip: "10110"
};

function printContact(myInfo) {
  // console.log(labelMaker);
  console.log(labelMaker.name + "\n" + labelMaker.address + "\n" + labelMaker.city + ", " + labelMaker.state + " " + labelMaker.zip);
}
printContact(labelMaker);