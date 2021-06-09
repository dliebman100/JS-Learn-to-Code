"use strict";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    announceSelf() {
        console.log("Hi, I am " + this.name + " and I am " +
            this.age + " years old.");
    }
}
let dana = new Person("Dana", 62);
let ezra = new Person("Ezra", 16);

dana.announceSelf();