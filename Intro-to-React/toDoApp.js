/* 
What's JSX? What are components? What are props?

JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

Components:
1) name must start with an upper case letter. Use Pascal casing(case sensitive) or else React will think it's a regular HTML tag.

2) The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

3) The component also requires a render() method, this method returns HTML.

Create a class component called `ToDoApp` which accepts the following props:

1.name (string)
2.weather (object)
Sample weather object:
{
  currentCity: "Cleveland",
  description: "Sunny",
  temperature: 76
}

3.toDos (an array)
Sample toDos array:
[
  "learn React",
  "eat",
  "sleep",
  "practice React",
  "watch React Pluralsight videos",
  "practice JavaScript",
]


It should render a h1 heading that says: "Welcome to [name]'s To-Do List"
It should render a h2 heading that says: "The weather in [currentCity] is [description] with a temperature of [temperature] degrees fahrenheit."
It should log each todo to the console
*/

//Pass a groceryList prop(should be an array) and render it to your ToDo component
class ToDoApp extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.toDos);

    /*
    we are using DESTRUCTURING to propely render without calling "this.props." on the ToDoList and GroceriesList below the <ul> tag

    we use .map() function when you render something to update the DOM efficiently or only the parts that changed
    */
    const { toDos, groceries } = this.props;

    toDos.forEach((toDo) => console.log(toDo));

    groceryList.forEach((list) => console.log(list));

    const ToDoList =
      toDos.length === 0 ? (
        <p>The to-do list is empty!</p>
      ) : (
        <ul>
          {toDos.map((toDo, index) => {
            return <li key={`${toDo}-${index}`}>{toDo}</li>;
          })}
        </ul>
      );

    const GroceriesList =
      groceryList.length === 0 ? (
        <p>The grocery list is empty!</p>
      ) : (
        <ul>
          {groceryList.map((list, index) => {
            return <li key={`${groceryList}-${index}`}>{list}</li>;
          })}
        </ul>
      );

    return (
      //must wrap it in <section> or <div> tags b/c React won't let you render 2 top level elements
      <section>
        <h1>Welcome to {this.props.name}'s To-Do List.</h1>
        <h2>
          The weather in {this.props.weather.currentCity} is{" "}
          {this.props.description}
          with a temperature of {this.props.weather.temperature} degrees
          fahrenheit.
        </h2>

        <h3>To Dos:</h3>
        {ToDoList}

        <h3>Groceries: </h3>
        {GroceriesList}
      </section>
    );
  }
}

//single responsibility principle
class Header extends React.Component {
  render() {
    return (
      <section>
        <h1>Welcome to {this.props.name}'s thingy</h1>
        <h2>
        The weather in {this.props.weather.currentCity} is{" "}
        {this.props.description}
        with a temperature of {this.props.weather.temperature} degrees
        fahrenheit.</h2>
      </section>
    );
  }
}

//we put the weather in a function to make it more readable
//be careful to note how it's passed in the render method
const weather = {
  currentCity: " Cleveland ",
  description: " sunny ",
  temperature: 76,
};

const toDos = [
  "learn React",
  "eat",
  "sleep",
  "practice React",
  "watch React Pluralsight videos",
  "practice JavaScript",
];

const emptyToDoList = [];

const emptyGroceryList = [];

const groceryList = ["almonds", "water", "orange juice", "floss"];

//change the toDos and groceryList to an empty array
ReactDOM.render(
  <ToDoApp
    name={" Daniel"}
    weather={weather}
    toDos={emptyToDoList}
    groceryList={groceryList}
  />,
  document.getElementById("root")
);

