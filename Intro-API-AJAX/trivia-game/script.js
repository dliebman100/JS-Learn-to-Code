"use strict";

window.onload = function () {
    console.log("Hello World!");

    //API is passed as a fetch method, 'chaining' with .then() method is going to accept a callback function
    //This is the method for API Call (Asynchronous code)
    fetch("http://jservice.io/api/random")
        .then((response) => {
            console.log("success", response);
            return response.json(); //parse the Response object   
        })
        //response will become readable to us using the data, but if you want to search for clues change "data" to "clues"
        .then((data) => {
            console.log("random data", data[0].answer);
            //this is where you do your DOM manipulation logic

            //1. extract the data that we need from the API
            const question = data[0].question;
            const answer = data[0].answer;
            const category = data[0].category.title;
            const questionContainer = document.querySelector(".js-question-container");

            console.log(question, answer, category);

            //2. create an h2 tag and set it to the question
            const questionElement = document.createElement("h2");
            questionElement.innerText = `Question: ${question}`;
            questionContainer.append(questionElement);

            //3. create an h3 tag and set it to answer
            const answerElement = document.createElement("h3");
            answerElement.innerText = `Answer: ${answer}`;
            questionContainer.append(answerElement);

            //4. create a <p> tage and set it to the category
            const categoryElement = document.createElement("p");
            categoryElement.innerText = `Category: ${category}`;
            questionContainer.append(categoryElement);
        })
        .catch((error) => {
            console.log("error", error);
            const questionContainer = document.querySelector(".js-question-container");
            //this is where you display some error messages
            const errorElement = document.createElement("p");
            errorElement.innerText = `Error: ${error}`;
            errorElement.classList.add("error");
            questionContainer.append(errorElement);
        });
    fetch("http://jservice.io/api/clues") // GET request
        .then((response) => response.json()) // simplified arrow syntax
        .then((data) => {
            console.log("clues data", data);
        })
        .catch((error) => console.log(error));

    // Example of synchronous code
    // console.log("another hello world"); // this got logged second
    // const sum = 1 + 10;
    // console.log("sum", sum);

    const questionsForm = document.querySelector(".js-questions-form");
    questionsForm.onsubmit = onQuestionsFormSubmit;
};

function onQuestionsFormSubmit(event) {
    //prevent the default behavior of the form to refresh unnecessarily
    event.preventDefault();
    console.log("hello from onQuestionsFormSubmit")

    //make an API call to get the questions from the jService API

    const userInput = document.querySelector(".js-questions-form-input").value;

    fetch(`http://jservice.io/api/random?count=${userInput || 10}`) // GET request
        .then((response) => response.json()) // simplified arrow syntax
        .then((data) => {
            console.log("onQuestionsFormSubmit data", data);

            //once we get back data from API we manipulate the DOM to display the results within the unordered list
            const questionsFormHeading = document.querySelector(".js-questions-form-heading");

            const questionsList = document.querySelector(".js-questions-list");
            questionsFormHeading.innerText = `${data.length} Random Trivia Questions`;

            questionsList.innerText = "";

            for(let index = 0; index < data.length; i++){
                //store the question in the variable question
                const question = data[index].question;
                const questionListItem = document.createElement("li");
                questionListItem.innerText = `Question ${ index + 1 }: ${question}`;
            }
            // refactor the for loop ^^ to use forEach()

        })
        .catch((error) => console.log(error));
}