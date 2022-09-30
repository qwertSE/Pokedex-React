const idPokemon = document.getElementsByClassName("pokemon__number");
const namePokemon = document.getElementsByClassName("pokemon__name");
const imgPokemon = document.getElementsByClassName("pokemon__image");

/* Id de controle para os botões */
export var idGlobal = 0;

/* Criação do card do pokemon caso exista. */
function buscarPokemon(id) {

  if(typeof id === 'string'){
    id = id.toLowerCase()
  }
  
  const fetchPokemon = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    const APIResponse = await fetch(url);
  
    /* Caso exista retorna as informações, caso não exista devera aparecer 'Not found' */
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    } else {
      imgPokemon[0].style.display = "none";
      namePokemon[0].innerHTML = "Não encontrado... :(";
      idPokemon[0].innerHTML = "";
    }
  };

  fetchPokemon(id)
    .then((result) => {
      /* Id de controle para os botões */
      idGlobal = result.id;
      
      idPokemon[0].innerHTML = result["id"];
      namePokemon[0].innerHTML = result["name"];
      imgPokemon[0].style.display = "block";

      /* Alguns pokemons não tem a imagem animada e outros não tem imagem ainda
      esse teste faz com que apareça corretamente a imagem caso exista */
      if (idGlobal <= 649) {
        imgPokemon[0].src =
          result["sprites"]["versions"]["generation-v"]["black-white"][
            "animated"
          ]["front_default"];
      } else if (idGlobal > 649 && idGlobal <= 898) {
        imgPokemon[0].src = result["sprites"]["front_default"];
      } else {
        imgPokemon[0].style.display = "none";
      }
    })
    .catch((err) => {
      console.log(`Ocorreu um erro...${err.message}`);
    });
}


export default buscarPokemon;
