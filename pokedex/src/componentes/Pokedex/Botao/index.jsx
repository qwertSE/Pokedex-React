import "./styles.scss";
import buscarPokemon, { idGlobal } from "../../../Utilidades/buscarPokemon";

function Botao() {
  return (
    <div className="buttons">
      <button
        className="button btn-prev"
        onClick={() => buscarPokemon(idGlobal - 1)}
      > {"< Prev"} </button>
      <button
        className="button btn-next"
        onClick={() => buscarPokemon(idGlobal + 1)}
      >{"Next >"}</button>
    </div>
  );
}

export default Botao;

/* ;

*/
