# Intro to JSON & AJAX

## API
 * Application Programming Interface
 * an API specifies how software components should interact

1. What kind of data is being returned from the API? Why are the benefits of using this data format? 

**JSON has easy, readable format** 

2. How do you get data for all clues? (i.e., what's the URL you'd need to use?)

**/clues**

3. How do you get data for clues that are worth 100 dgit aollars? **/clues?values=100**

4. How do you get data for 50 random clues in a single request?

**jservice.io.io/api/clues?value=50/**

5. Can you get data for 20 random clues that are worth 100 dollars? Why not? 

**jservice.io.io/api/clues?value=100/random?count=20**

6. How do you get data for 50 categories in a single request? **jservice.io/api/categories?count=50**

7. How do you get data for the category that has an id of 11496? **jservice.io/api/categories?count=11496**

8. What type of request is being made when you open a url in the browser? 

**HTTP request**


## Fetch Basics

*   follows the example.txt
`fetch('example.txt')
    .then( response => response.txt())
    .then( text => {
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
    });

## JSON

* ***So JSON is data. Objects are code.***

JSON originated as a subset of what you can write write in JavaScript source code, i.e. it looks like array literals and object literals with specific restrictions. But the important difference is that JSON is an interchange format. 

You send a string containing JSON to something and they parse it and get the data out. Moreover, when you receive JSON you parse it using `JSON.parse()`, not `eval()`. You aren't sending raw chunks of JavaScript source to code to someone.