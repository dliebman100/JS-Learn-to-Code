class Whip {
    constructor(make, model, miles = 0, owner = "") {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.owner = owner;

    }
    describe() {
        return this.owner + "'s " + this.make + ", " + this.model + " has (miles: " + this.miles + ")";
    }
}
let danVehicle = new Whip("Ford","Bronco", 35000, "Dee");
let mikeVehicle = new Whip("Tesla","Model S", 500, "Mike");
let joyVehicle = new Whip("Lamoborgini","Murcielago", 6000, "Joy");
let pimpMyRide = new Whip("Toyota", "Tacoma", 100000, "Xzibit");

// console.log(pimpMyRide.describe());

let cars = [danVehicle, mikeVehicle, joyVehicle];
for (let i = 0; i < cars.length; i++) {
   let owner = cars[i].owner;
   if (owner == ""){
       owner = "no one"
   }
   console.log(cars[i].model + " is owned by " + cars[i].owner + " (miles: " + cars[i].miles + ")");
}
for (let i = 0; i < cars.length; i++) {
    if (cars[i].owner == ""){
        console.log(cars[i].model + " is owned by no one (miles: " + cars[i].miles + ")");
    }
    console.log(cars[i].model + " is owned by " + "(miles: " + cars[i].miles + ")");
}