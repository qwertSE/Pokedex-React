import buscarPokemon, { idGlobal } from "./buscarPokemon";

export function next() {
  if (idGlobal > 0) {
    buscarPokemon(idGlobal + 1);
  } else {
    buscarPokemon(1);
  }
}

export function previous() {
  if (idGlobal > 1) {
    buscarPokemon(idGlobal - 1);
  } else {
    buscarPokemon(1);
  }
}
