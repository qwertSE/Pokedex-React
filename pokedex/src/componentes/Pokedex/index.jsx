import "./styles.scss";
import pokedexImg from "../../img/pokedex.png";
import buscarPokemon, { idGlobal } from "../../Utilidades/buscarPokemon";
import Botao from "./Botao";
import { useEffect} from "react";

const submit = (event) => {
  event.preventDefault();
  const input = document.querySelector(".input__search");
  buscarPokemon(input.value);
};

function Pokedex() {

  useEffect(() => {
    console.log('renderizou')
  }, []);

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
      <div className="buttons">
        <Botao name={"< Prev"} func={() => buscarPokemon(idGlobal - 1)} />
        <Botao name={"Next >"} func={() => buscarPokemon(idGlobal + 1)} />
      </div>
      <img src={pokedexImg} alt="pokedex" className="pokedex" />
    </main>
  );
}

export default Pokedex;
