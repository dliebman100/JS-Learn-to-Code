"use strict";
//vehicle object without parameters
class Vehicle {
    constructor() {
        this.make = "";
        this.model = "model";
        this.miles = 0;
        this.owner = "";
    }
}
let danVehicle = new Vehicle();
danVehicle.make = "Ford";
danVehicle.model = "Bronco";
danVehicle.miles = 35000;
danVehicle.owner = "Dee";

let mikeVehicle = new Vehicle();
mikeVehicle.make = "Tesla";
mikeVehicle.model = "Model S";
mikeVehicle.miles = 500;
mikeVehicle.owner = "Mike";

let joyVehicle = new Vehicle();
joyVehicle.make = "Lamborgini";
joyVehicle.model = "Murcielago";
joyVehicle.miles = 60000;
joyVehicle.owner = "Joy";

let cars = [danVehicle, mikeVehicle, joyVehicle];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].model + " is owned by " + cars[i].owner);
}
// build a vehicle with parameterized constructor
class Whip {
    constructor(make, model, miles, owner) {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.owner = owner;

    }
    describe() {
        return this.owner + "'s " + this.make + ", " + this.model + " has " + this.miles + " miles";
    }
}
const pimpMyRide = new Whip("Toyota", "Tacoma", 100000, "Xzibit");
console.log(pimpMyRide.describe());
