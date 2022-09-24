const idPokemon = document.getElementsByClassName("pokemon__number");
const namePokemon = document.getElementsByClassName("pokemon__name");
const imgPokemon = document.getElementsByClassName("pokemon__image");
var idGlobal = 0;

function buscarPokemon(id) {
  fetchPokemon(id)
    .then((response) => {
      return response;
    })
    .then((result) => {
      if(result){
      
      /* Id de controle para os botões */
      idGlobal = result.id;

      idPokemon[0].innerHTML = result["id"];
      namePokemon[0].innerHTML = result["name"];
      imgPokemon[0].style.display = "block";
      imgPokemon[0].src = result['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];}
      else {
        imgPokemon.style.display = 'none';
        namePokemon.innerHTML = 'Not found :c';
        idPokemon.innerHTML = '';
      }
    });
  return console.log("Sucesso");
}

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

export default buscarPokemon;
