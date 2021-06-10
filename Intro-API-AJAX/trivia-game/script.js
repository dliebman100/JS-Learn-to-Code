"use strict";

window.onload = function () {
    console.log("Hello World!");

    //API is passed as a fetch method, 'chaining' with .then() method is going to accept a callback function
    //This is the method for API Call (Asynchronous code)
    fetch("http://jservice.io/api/random")
        .then(response => {
            console.log("success", response);
            return response.json(); //parse the Response object   
        })
        //response will become readable to us using the data, but if you want to search for clues change "data" to "clues"
        .then(data => {
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
        .catch(error => {
            console.log("error", error);
            const questionContainer = document.querySelector(".js-question-container");
            //this is where you display some error messages
            const errorElement = document.createElement("p");
            errorElement.innerText = `Error: ${error}`;
            errorElement.classList.add("error");
            questionContainer.append(errorElement);
        });
    fetch("http://jservice.io/api/clues") // GET request
        //the response method
        .then(response => response.json()) // simplified arrow syntax
        .then(data => {
            console.log("clues data", data);
        })
        .catch(error => console.log(error));

    // Example of synchronous code
    // console.log("another hello world"); // this got logged second
    // const sum = 1 + 10;
    // console.log("sum", sum);

    //Excercise 1
    fetch("http://jservice.io/api/categories?count=10")
        .then((response) => response.json())
        .then((data) => {
            console.log("categories data:", data);
            data.forEach((category) => {
                console.log("category data", category);

                const categoriesList = document.querySelector(".js-categories-list");
                const categoriesListItem = document.createElement("li");
                categoriesListItem.innerText = `${category.title}`;
                categoriesList.append(categories);
            });
        })
        .catch((error) => console.log(error));
    const questionsForm = document.querySelector(".js-questions-form");
    questionsForm.onsubmit = onQuestionsFormSubmit;

    //Exercise 2
    const categoryForm = document.querySelector(".js-category-form");
    categoryForm.onsubmit = onCategoryFormSubmit;
};

function onQuestionsFormSubmit(event) {
    // prevent the default behavior of a form
    event.preventDefault();
    console.log("hello from onQuestionsFormSubmit");
    // make an API call to get the questions from the jService API

    const userInput = document.querySelector(".js-questions-form-input").value;

    fetch(`http://jservice.io/api/random?count=${userInput || 10}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("onQuestionsFormSubmit data", data);
            // DOM manipulation to display the results within the unordered list
            const questionsFormHeading = document.querySelector(
                ".js-questions-form-heading"
            );
            const questionsList = document.querySelector(".js-questions-list");
            questionsFormHeading.innerText = `${data.length} Random Trivia Questions`;

            questionsList.innerText = "";

            for (let index = 0; index < data.length; index++) {
                const question = data[index].question;
                const questionListItem = document.createElement("li");
                questionListItem.innerText = `Question ${index + 1}: ${question}`;
                questionsList.append(questionListItem);
            }

            // refactor the for loop ^^ to use forEach()
        })
        .catch(err => {
            let nm = err.name;
            let msg = err.message;
            console.log(`CATCH: ${nm} ${msg}`);
        });
}

function onCategoryFormSubmit(event) {
    event.preventDefault(); // prevents browser refresh

    // get the input from the user
    const userInput = document.querySelector(".js-category-form-input").value;

    // fetch the data from the API
    fetch(`http://jservice.io/api/category?id=${userInput}`)
        .then((response) => response.json())
        .then((data) => {
            // when the data come back, do DOM manipulation
            console.log("category form data", data);

            // update the heading with the category title
            const categoryFormHeading = document.querySelector(
                ".js-categoryById-form-heading"
            );
            categoryFormHeading.innerText = `${data.title} Trivia Questions`;

            // display the results within the unordered list
            const categoryQuestionsList = document.querySelector(
                ".js-categoryById-list"
            );

            categoryQuestionsList.innerText = ""; // reset the category questions form

            for (let index = 0; index < data.clues.length; index++) {
                const question = data.clues[index].question;
                // console.log("data.clues[index]", data.clues[index])
                // console.log("question", question);
                const categoryQuestionListItem = document.createElement("li");
                categoryQuestionListItem.innerText = `Question ${
            index + 1
          }: ${question}`;
                categoryQuestionsList.append(categoryQuestionListItem);
            }
        });
}