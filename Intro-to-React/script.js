console.log("hello world");

// You can store JSX in a variable
const element = (
  <section>
    <h1>Hello World</h1>
  </section>
);

// Curly brackets {} to embed and evaluate any JavaScript expression
const total = 5 + 5;
const sum = <p>5 + 5 = {total}</p>;

// Adding a class to a JSX element
const anotherElement = (
  <div>
    <h1 className="my-element">Hou Chia</h1>
  </div>
);
ReactDOM.render(anotherElement, document.getElementById("root"));
//you can only pass a single top-level element to ReactDOM.render()
//rendering JSX by using fullName instead of [element]

class Potato extends React.Component {
  render() {
    //this is required (class needs this method)
    return <h1>My favorite potato is {this.props.type}</h1>;
  }
}
/*
Create a Person component that accepts "name" as a prop and renders "Hello my name is [name]" to the screen
*/
class Person extends React.Component {
  render() {
    return (
      <h1>
        Hello my name is {this.props.name}. I live in {this.props.city}. I'm a
        {this.props.occupation}. My favorite food is {this.props.favoriteFood}. My favorite dessert is {this.props.favoriteDessert}. My favorite thing is {this.props.hobby}. I'm also {this.props.age}.
      </h1>
    );
  }
}
/*
Render 5 instances of the Person component with different prop values.
*/
ReactDOM.render(
  <section>
    <div>div1</div>
    <div>div2</div>
    {element}
    {anotherElement}
    {/* <h1>My mom's favorite potato is sweet potato</h1>;
      <h1>My mom's favorite potato is red potato</h1>;
      <h1>My mom's favorite potato is white potato</h1>; */}
    <Potato type={"white potato"} />
    <Potato type={"red potato"} />
    <Potato type={"white potato"} />
    <Person
      name={"Hou Chia"}
      city={"Cleveland"}
      occupation={" instructor"}
      favoriteFood={"ramen"}
      age={33}
    />

    <Person
      name={"Daniel Liebman"}
      city={"NYC"}
      occupation={" student"}
      favoriteFood={" Dumplings"}
      age={33}
      hobby={" Dog"}
      favoriteSport={" Hockey"}
      favoriteDessert={" Mango Sticky Rice"}
    />
  </section>,
  document.getElementById("root")
);
