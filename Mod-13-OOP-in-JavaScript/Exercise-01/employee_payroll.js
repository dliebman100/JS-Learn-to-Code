"use strict";

//Employee params id, name, jobTitle, payRate
class Employee {
    constructor(id, name, jobTitle, payRate) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    //promote function params newJobTitle, newPayRate
    promote(newJobTitle, newPayRate) {
        this.payRate = newPayRate;
        this.jobTitle = newJobTitle;
    }
    //toString function 
    toString() {
        return this.name + " (ID: " + this.id + ") is a " + this.jobTitle + " earning $" + this.payRate.toFixed(2);
        // return `${this.name} is a ${this.jobTitle}`;
    }
    //getGrossPay function hrsWorked >40 
    getGrossPay(hrsWorked) {
        let weeklyGrossPay;
        if (hrsWorked <= 40) {
            let regHours = this.payRate * hrsWorked;
            // let overtime = 0.00;
            weeklyGrossPay = regHours;
        } else {
            let regHours = (this.payRate * 40);
            let overtime = (this.payRate * 1.5) * (hrsWorked - 40);
            weeklyGrossPay = regHours + overtime;
        }
        return weeklyGrossPay;
    }
}
let emp1 = new Employee(1, "Ian", "Computer Programmer", 38.00);
let emp2 = new Employee(15, "Mike", "Lead Engineer", 75.00);

//display employee properties by calling toString()
console.log(emp1.toString());

//call getGrossPay() for each employee and display employee's name, their hrs worked, grossPay value returned
let grossPay = emp1.getGrossPay(40);
console.log(emp1.name + " earned $" + grossPay.toFixed(2) + " for working 40 hours");
// console.log(emp1.toString());
