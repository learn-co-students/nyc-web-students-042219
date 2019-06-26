document.addEventListener('DOMContentLoaded', () => {

  const PokeAPI = "http://localhost:3000/pokemon"
  const pokeContainer = document.getElementById("pokemon-container")
  const searchBar = document.getElementById("pokemon-search-input")
  const newPokeForm = document.querySelector("#new-pokemon-form")
  let allPoke = []

  function fetchPokemon(){
    fetch(PokeAPI, {method: "GET"})
      .then(response => response.json())
      .then(pokes => {
        allPoke = pokes
        displayPokemons(allPoke)
      })
    }

  function displayPokemons(pokemons){
    pokeContainer.innerHTML = pokemons.map(renderPoke).join('')
  }

  function renderPoke(pokemon){
    return `
      <div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
          </div>
        </div>
      </div>
    `
  }



  function deleteThatPokemon(e){
		allPoke = allPoke.filter(pokemon => pokemon.id != parseInt(e.target.id))
    displayPokemons(allPoke)
		fetch(`${PokeAPI}/${e.target.id}`, {
			method: "DELETE"
		})
	}

  newPokeForm.addEventListener("submit", (e) => {
		e.preventDefault()
    let newPokename = document.getElementById("new-poke-name").value
    let newPokeFrontSprite = document.getElementById("new-poke-front-sprite").value
    let newPokeBackSprite = document.getElementById("new-poke-back-sprite").value
		fetch(PokeAPI, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				name: newPokename,
				sprites: {
					front: newPokeFrontSprite,
					back: newPokeBackSprite
				}
			})
		})
		.then(res => res.json())
		.then(newPoke => {
			allPoke.push(newPoke)
      displayPokemons(allPoke)
		})
	})

  searchBar.addEventListener("input", e => {
    const filteredPokemons = allPoke.filter(poke => {
      return poke.name.includes(e.target.value)
    })
    displayPokemons(filteredPokemons)
  })

  pokeContainer.addEventListener("click", e => {
    if (e.target.tagName === "IMG"){
      const clickedPoke = allPoke.find(poke => {
        return poke.id === parseInt(e.target.dataset.id)
      })
      e.target.src = (e.target.src === clickedPoke.sprites.front ? clickedPoke.sprites.back : clickedPoke.sprites.front)
    }
    else if (e.target.dataset.id === "edit"){

    }
    else if (e.target.dataset.id === "delete"){
      deleteThatPokemon(e)
    }
  })

  fetchPokemon()

})
