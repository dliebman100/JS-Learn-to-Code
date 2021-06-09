# Intro to JSON & AJAX


## JSON

1. ***So JSON is data. Objects are code.***

JSON originated as a subset of what you can write write in JavaScript source code, i.e. it looks like array literals and object literals with specific restrictions. But the important difference is that JSON is an interchange format. You send a string containing JSON to something and they parse it and get the data out. You don't send raw JavaScript to them, because that would require a whole JavaScript interpreter to evaluate. Moreover, when you receive JSON you parse it using `JSON.parse()`, not `eval()`. The point is that it's a restricted subset meant for interchange between arbitrary languages/environments. You aren't sending raw chunks of JavaScript source to code to someone.