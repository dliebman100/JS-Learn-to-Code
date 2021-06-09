class Vehicle {
    constructor(owner, makeModel) {
        this.owner = owner;
        this.makeModel = makeModel;
        this.odometer = 0;
    }
    drive(numMiles) {
        this.odometer += numMiles;
    }
    changeOwnerTo(newOwner) {
        this.owner = newOwner;
    }
    toString() {
        return this.owner + " owns a " + this.makeModel + ".\n" +
            "The odometer shows " + this.odometer + " miles.";
    }
}
let vehicle1 = new Vehicle("Dana", "Ford Explorer");
let vehicle2 = new Vehicle("Dana", "Ford Ranger");

vehicle1.drive(10000);
vehicle1.changeOwnerTo("Mark");
vehicle1.toString();
console.log(vehicle1.toString());

vehicle1.drive(10000);
console.log(vehicle1.toString());

vehicle2.drive(500);
vehicle2.drive(25);
console.log(vehicle2.toString());