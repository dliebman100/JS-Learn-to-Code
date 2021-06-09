"use strict";

class BetterDate extends Date {

    constructor() {
        super();
    }
    // returns the date as dd-month-yyyy
    getFormattedDate() {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
    }
}
let today = new BetterDate();

let copyright = "(c) " + today.getFullYear() + " by Dana";
console.log(copyright);