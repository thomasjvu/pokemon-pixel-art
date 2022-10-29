//Fetch using Pokédex API
document.querySelector('button').addEventListener('click', getPokemon)

// document.querySelector('button').addEventListener('click', getPokemonName)

// funtion getPokemonName() {
//   const name = document.querySelector('input').value
//   document.queryselector('#pokemonName').value = name
// }

function getPokemon(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.glitch.me/v1/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#pokemonName').innerText = choice
        document.querySelector('#img').src = data.sprite 
        document.querySelector('#description').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
