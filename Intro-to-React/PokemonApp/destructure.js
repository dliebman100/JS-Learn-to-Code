const dimensions = [20, 5];

// create variables
const width = dimensions[0];
const height = dimensions[1];

// create variables
const [width, height] = dimensions;

// log them
console.log(width); //20
console.log(height); //5


//REACT.js
function App() {
  //useState function
  //returns an array of 2 items and we destructure them into 2 variables counter and setCounter.
  const [counter, setCounter] = useState(0);
  // return ...;
}

function Area() {
  const [ height, width] = dimensions
}