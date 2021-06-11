Heading IDs:
### My Great Heading {#custom-id}
The HTML looks like this: <h3 id="custom-id">My Great Heading</h3>


# REACT

- Big picture:

  - Allows us to declare, interactive, updates the UI based on the container
  - Easier than DOM manipulation (uses virtual DOM)
  - Another benefit is reusable web components
  - Maintained by Facebook

- Component:
  small piece of the user interface(UI) and you're writing HTML like langauge in Javascript

## In the index.js
ReactDOM.render(<h1>Hello world!<h1/>, document.getElementById("root"))

Is saying ==>

ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT?) 

Another variation:

ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById("root"))


## In the index.html

<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>