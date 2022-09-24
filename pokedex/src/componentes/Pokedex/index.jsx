import './styles.scss'
import pokedexImg from "../../img/pokedex.png"

function Pokedex() {
  return (
    <main>
      <img src="#" alt="pokemon" class="pokemon__image" />

      <h1 class="pokemon__data">
        <span class="pokemon__number"></span> -
        <span class="pokemon__name"></span>
      </h1>

      <form class="form">
        <input
          type="search"
          class="input__search"
          placeholder="Name or Number"
          required
        />
      </form>

      <div class="buttons">
        <button class="button btn-prev">Prev &lt;</button>
        <button class="button btn-next">Next &gt;</button>
      </div>

      <img src={pokedexImg} alt="pokedex" class="pokedex" />
    </main>
  );
}

export default Pokedex;
