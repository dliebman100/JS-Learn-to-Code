// Create a component called PokemonApp below. It must accept a `header` (an object) and `pokemons` (an array of objects) as props.

class PokemonApp extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.pokemons);

    //need new list to render pokemons array
    this.props.pokemons.forEach((pokemon) => console.log(pokemon));

    const BestPokemonApp =
      this.props.header.menu.length === 0 ? (
        <p>"There are no pokemons to render"</p>
      ) : (
        <ul>
          {this.props.header.menu.map((menuItem, index) => {
            return <li key={`${menuItem}-${index}`}>{menuItem}</li>;
          })}
        </ul>
      );

    const FavPokemonsList =
      this.props.pokemons.length === 0 ? (
        <p>There are no pokemons to render!</p>
      ) : (
        <ul>
          {this.props.pokemons.map((poke, index) => {
            return (
              <li key={`${poke.name}-${index}`}>
                <h2>{poke.name}</h2>
                <img src={poke.imgSrc}></img>
                <h4>Color: {poke.color.name}</h4>
              </li>
            );
          })}
        </ul>
      );

    return (
      <section>
        <h1>{this.props.header["name"]}'s Pokemon App</h1>
        <h2> This is the best Pokemon App ever </h2>
        {BestPokemonApp}

        <h3>Here are my favorite pokemons:</h3>
        {FavPokemonsList}
      </section>
    );
  }
}
const pokemons = [
  {
    name: "Bulbasaur",
    color: {
      name: "green",
      url: "https://pokeapi.co/api/v2/pokemon-color/1/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Charmeleon",
    color: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/pokemon-color/5/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    name: "Charizard",
    color: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/pokemon-color/6/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    name: "Weepinbell",
    color: {
      name: undefined,
      url: "https://pokeapi.co/api/v2/pokemon-color/70/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    name: "Slowbro",
    color: {
      name: "pink",
      url: "https://pokeapi.co/api/v2/pokemon-color/80/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
];

const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const header = {
  name: "Daniel",
  description: "This is the best Pokemon App ever",
  menu: ["item 1", "item 2", "item 3", "item 4"],
};

const emptyPokemonsList = [];
const emptyPokeList = [];

ReactDOM.render(
  <PokemonApp header={header} pokemons={pokemons} items={items} />,
  document.getElementById("root")
);
