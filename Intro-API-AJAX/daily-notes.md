# Intro to JSON & AJAX

## API Basics
 * Application Programming Interface
 * an API specifies how software components should interact

1. What kind of data is being returned from the API? Why are the benefits of using this data format? **JSON has an easy, readable format. JSON is parsed into a ready-to-use JavaScript object.** 

2. How do you get data for all clues? (i.e., what's the URL you'd need to use?) **/clues**

3. How do you get data for clues that are worth 100 dgit aollars? **/clues?values=100**

4. How do you get data for 50 random clues in a single request? **jservice.io.io/api/clues?value=50/**

5. Can you get data for 20 random clues that are worth 100 dollars? Why not? **There is no support for the API filtering by value, count can only be used as a query parameter** 

**jservice.io.io/api/clues?value=100/random?count=20**

6. How do you get data for 50 categories in a single request? **jservice.io/api/category?count=50**

7. How do you get data for the category that has an id of 11496? **jservice.io/api/category?id=11496**

8. What type of request is being made when you open a url in the browser? **GET request (retrieve data from API)**

### Terms to know
1. Status code
2. **HTTP Methods:**
The two most common HTTP methods are: GET and POST.
3. **The GET Method:**
GET is used to request data from a specified resource. 
4. **POST Method:**
POST is used to send data to a server to create/update a resource.
5. **PUT Method:**
PUT is used to send data to a server to create/update a resource.
6. **HEAD Method:**
HEAD is almost identical to GET, but without the response body.
7. **DELETE Method:**
The DELETE method deletes the specified resource.



## Fetch Basics / JSON Recipe

*   follows the example.txt

`fetch('example.txt')
    .then( response => response.txt())
    .then( text => {
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
    });

## JSON Basics

* JSON stands for *J*ava*S*cript *O*bject *N*otation

* **JSON is data. Objects are code.**

JSON originated as a subset of what you can write write in JavaScript source code, i.e. it looks like array literals and object literals with specific restrictions. But the important difference is that JSON is an interchange format. You send a string containing JSON to something and they parse it and get the data out. Moreover, when you receive JSON you parse it using `JSON.parse()`.

* JavaScript also has a built in function for converting JSON strings into JavaScript objects: `JSON.parse()`

Ex:
` '{"name":"John", "age":30, "city":"New York"}'`

Using JS function `JSON.parse()`, you'd convert text into an object:
`const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');`

* JavaScript also has a built in function for converting an object into a JSON string: `JSON.stringify()`

* In JSON, keys must be strings, written with double quotes: `{"name":"John"}`
It's different than JavaScript's use.

### JSON Rules
1. Key/Value pairs
2. Double quotes
3. Must fall into data type (string, number, boolean, array, object)
4. Data is separated by commas 
5. Curly braces hold objects
6. Square brackets hold arrays