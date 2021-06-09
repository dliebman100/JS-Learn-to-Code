"use strict";
class Shape {
    constructor(color) {
       this.color = color;
    }
    toString() {
       return "I am a generic " + this.color + " shape";
    }
 }
 class Circle extends Shape {
    constructor(color, radius) {
       super(color);
       this.radius = radius;
    }
    // adding a new method
    getArea() {
       return 3.14159 * (this.radius ** 2);
    }
    // overriding the implementation of toString()
    toString() {
       return "I am a " + this.color + " circle with a " + "radius of " + this.radius;
    }
 }
let s = new Shape("red");
console.log(s.toString());
let c = new Circle("blue", 5);
console.log(c.toString());
console.log("My area is " + c.getArea());