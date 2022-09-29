import "./styles.scss";
import pokedexImg from "../../img/pokedex.png";
import buscarPokemon from "../../Utilidades/buscarPokemon";
import Botao from './Botao'

const submit = (event) => {
  event.preventDefault();
  const input = document.querySelector(".input__search");
  buscarPokemon(input.value);
};

function Pokedex() {
  return (
    <main>
      <img src="#" alt="pokemon" className="pokemon__image" />

      <h1 className="pokemon__data">
        <span className="pokemon__number"></span> -
        <span className="pokemon__name"></span>
      </h1>

      <form className="form" onSubmit={submit}>
        <input
          type="search"
          className="input__search"
          placeholder="Name or Number"
          required
        />
      </form>
      <Botao/>
      <img src={pokedexImg} alt="pokedex" className="pokedex" />
    </main>
  );
}

export default Pokedex;
