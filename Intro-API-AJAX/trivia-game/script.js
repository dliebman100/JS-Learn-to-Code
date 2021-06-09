"use strict";

window.onload = function () {
    console.log("Hello World!");

    //API is passed as a fetch method, using 'chaining' with .then() method is going to accept a callback function
    fetch("http://jservice.io/api/random")
        .then((response) => {
            console.log("success", response);
            return response.json(); //parse the Response object   
        })
        //response will become readable to us using the data
        .then((data) => {
            console.log("data", data);
        });
};