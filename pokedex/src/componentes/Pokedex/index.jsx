import "./styles.scss";
import pokedexImg from "../../img/pokedex.png";
import buscarPokemon from "../../Utilidades/buscarPokemon";


const submit = (event) => {
  event.preventDefault();
  const input = document.querySelector(".input__search");
  buscarPokemon(input.value);

  /* Somente para teste */
  console.log(`O formulario foi enviado com sucesso!`);
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

      <div className="buttons">
        <button className="button btn-prev">&lt; Prev </button>
        <button className="button btn-next">Next &gt;</button>
      </div>

      <img src={pokedexImg} alt="pokedex" className="pokedex" />
    </main>
  );
}

export default Pokedex;
