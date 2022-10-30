let rand = Math.floor(Math.random() * 806)
document.querySelector('img').src = `https://cdn.traction.one/pokedex/pokemon/${rand}.png` 

// Add Refresh Page Function
function refresh() {
    window.location.reload("Refresh")
}

//Fetch using Pokédex API
// document.querySelector('button').addEventListener('click', getPokemon)

// function getPokemon(){
//   let rand = Math.floor(Math.random() * 807)
//   const choice = document.querySelector('input').value
//   document.querySelector('img').src = `https://cdn.traction.one/pokedex/pokemon/${choice}.png` 
//   const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as json
//       .then(data => {
//         console.log(data)
//         document.queryselector('#pokemonname').innertext = data.name
//         // document.queryselector('#description').innertext = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
