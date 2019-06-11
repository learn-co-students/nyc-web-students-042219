// NOT REFACTORED //
document.addEventListener('DOMContentLoaded', () => {

// ** VARIABLES *//
	const pokeURL = "http://localhost:3000/pokemon"
	//these are our elements on the DOM that we need to grab later//
	const pokeContainer = document.querySelector("#pokemon-container")
	const searchBar = document.querySelector("#pokemon-search-input")
	const newPokeForm = document.querySelector("#new-pokemon-form")
	//we will save all of our pokemon to a local variable so that we//
	//don't need to refetch the info again after the initial fetch//
	let pokeArray = []

// ** FETCH ** //

	// fetchPokemon will call the DB JSON and fetch all of the pokemon //
	function fetchPokemon(){
		fetch(pokeURL)
		.then(response => {
			return response.json()
		})
		.then(pokemons => {
			// here we're setting the empty array, pokeArray, equal to the data
			// that was returned from the DB
			pokeArray = pokemons
			// console.log(pokeArray);
			// we'll map through all of the pokemon and return HTML for each
			let pokeHTML = pokemons.map(pokemon => {
				return renderSinglePokemon(pokemon)
			})
			// change the inner HTML of the pokeContainer to be the HTML string of
			// pokemon we just created
			// we need to join the strings together to create one massive string
			// otherwise there will be commas btw each of the pokemon and they will
			// render on the page
			pokeContainer.innerHTML = pokeHTML.join('')//this is the end of our map
		})
	}

// ** FETCH ** //


// ** EVENT LISTENERS ** //

	// here we want to create the functionality to filter the pokemon based
	// on the input into the search bar
	// in order to do so we need to add an event listener onto the input field
	// then we can filter the pokeArray of all pokemons to see if any
	// pokemon names include the value of the search bar
	// if so, render those pokemon that are returned from the filter
	searchBar.addEventListener("input", () => {
		// here we're adding an input listener to the search bar
		let input = searchBar.value
		// console.log(input);
		// filter the pokeArray and for each pokemon
		// return a pokemon if their name includes the value of the search bar
		let filteredPokemon = pokeArray.filter(pokemon => {
			return pokemon.name.includes(input)
		})
		// console.log(filteredPokemon);
		// for those pokemon that are filtered, map through them and for each
		// pokemon return the HTML from the renderSinglePokemon function
		let filteredPokeHTML = filteredPokemon.map(pokemon => {
			return renderSinglePokemon(pokemon)
		})
		// console.log(filteredPokeHTML);
		// then set the inner HTML of the pokeContainer equal to the HTML
		// that we just created
		pokeContainer.innerHTML = filteredPokeHTML.join('')
	})// end of the search listener


	// here we want to create functionality for several things: toggling the
	// pokemon, editing the individual pokemon, and deleting the individual
	// pokemon
	// we're adding the event listener onto the entire pokeContainer
	// for any click
	// and then separating the specific clicks that we want to listen to
	// with a conditional
	pokeContainer.addEventListener("click", (e) => {
		// if the target of the click is the image...
		if(e.target.tagName === "IMG"){
			// console.log(e.target.dataset.id);
			// we want to grab the pokemon ID from the image's data-id
			// that we clicked on
			let foundPokeId = parseInt(e.target.dataset.id)
			// then find the pokemon in the array that we want to grab the
			// sprite information from
			let foundPoke = pokeArray.find(pokemon => {
				return pokemon.id === foundPokeId
			})
			// console.log(foundPoke);
			// if the image on the DOM is the same URL as the pokemon's front sprite
			// switch it for the back sprite
			if(e.target.src === foundPoke.sprites.front){
				e.target.src = foundPoke.sprites.back
			}
			// otherwise, switch it to the front sprite
			else {
				e.target.src = foundPoke.sprites.front
			}
		}
		// if the target of the click is the edit button
		if(e.target.dataset.id === "edit"){
			// console.log("clicked");
			// then we want to add the edit form to the DOM
			e.target.parentElement.innerHTML += renderEditForm(e.target.id)
			}
			// we need the form to exist on the DOM before we can
			// listen for a click on the submit button for the edit form
			if(e.target.dataset.id === "edit-btn"){
				// we're preventing the page from refreshing - the typical action
				// for a submit button
				e.preventDefault()
				// console.log("clicked the submit btn on the edit form");
				// then we're going to call the editPokemon function
				// which will listen to the input fields
				// and then send a PATCH request
				// and then we will rerender the pokeContainer to represent the
				// changed pokemon and the rest of the pokemons
				// and update the local variables
				editThatPokemon(e)
			}
		// if the target of the click is the delete button
		if(e.target.dataset.id === "delete"){
			// console.log("delete me")
			// we're going to call the deletePokemon function
			// which will identify which pokemon we want to delete
			// then send a DELETE request
			// then we will update our local variables
			// and delete the pokemon from the DOM
			deleteThatPokemon(e)
		}
	})//this is the end of my eventlistener for clicks


	// here we want to create the functionality to create a new pokemon
	// we're going to add an event listener to the new pokemon form
	// listen to each of the inputs
	// send a POST request with the values
	// and pessimistically render the new pokemon by updating the local variables
	// and rerendering all of the pokemon in the pokeContainer
	newPokeForm.addEventListener("submit", (e) => {
		e.preventDefault()
		// console.log(e.target);
		// const newPokemon = {
		// 	name: e.target[0].value,
		// 	sprites: {
		// 		front: e.target[1].value,
		// 		back: e.target[2].value
		// 	}
		let name = document.getElementById("new-poke-name").value
		let frontSprite = document.getElementById("new-poke-front-sprite").value
		let backSprite = document.getElementById("new-poke-back-sprite").value
		// console.log(name, frontSprite, backSprite);
		fetch(pokeURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				name: name,
				sprites: {
					front: frontSprite,
					back: backSprite
				}
			})
		})
		.then(response => response.json())
		.then(pokemon => {
			// console.log(pokemon);
			pokeArray.push(pokemon)
			// console.log(newPokeHTML);
		})
		let newPokeHTML = pokeArray.map(renderSinglePokemon).join("")
		pokeContainer.innerHTML = newPokeHTML
	})

	// this function will take in an event (when it is invoked above)
	// and create the ability for a user to edit an existing pokemon
	function editThatPokemon(e){
		// console.log(e.target);
		// here we're finding the pokemon in the original array that matches
		// the pokemon we want to edit
		// we need to change the e.target.id into an integer so we parseInt before
		// we compare to each of the pokemon's ids
		let foundPoke = pokeArray.find(pokemon => pokemon.id === parseInt(e.target.id))
		// console.log('foundpoke', foundPoke);
		// here we're grabbing the index of the foundpoke in the original array
		// we NEED TO DO THIS BEFORE WE SEND OUR PATCH
		// so that we can switch the edited pokemon on the DOM
		// and keep it's place in the array
		let foundPokeIndex = parseInt(pokeArray.indexOf(foundPoke))
		// console.log(foundPokeIndex);
		// here we're going to grab all of the values of the edit form
		// BUT WE CANNOT DO THIS UNTIL THE FORM IS ADDED TO THE DOM *** //
		let editPokeName = e.target.parentElement[0].value
		let editPokeFront = e.target.parentElement[1].value
		let editPokeBack = e.target.parentElement[2].value
		// console.log(editPokeName, editPokeFront, editPokeBack);
		// here we're sending our PATCH request with the edited values
		fetch(`${pokeURL}/${e.target.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				name: editPokeName,
				sprites: {
					front: editPokeFront,
					back: editPokeBack
				}
			})
		})
		.then(res => res.json())
		.then(editedPoke => {
			// console.log(editedPoke)
			// here we're going to update our local variable and replace the
			// original pokemon with your edited pokemon that we got back
			// from the fetch
			pokeArray[foundPokeIndex] = editedPoke
			// console.log(foundPokeIndex)
			// then we're going to render all of our pokemon on the DOM
			let newPokeHTML = pokeArray.map(pokemon => {
				return renderSinglePokemon(pokemon)
			})
			// console.log(newPokeHTML)
			// console.log(pokeContainer)
			pokeContainer.innerHTML = newPokeHTML.join("")
		})
	}

	// this function will take in an event (it is invoked above)
	// and create the ability for a user to delete an existing pokemon
	function deleteThatPokemon(e){
		//first we're going to identify which pokemon we want to delete
		let foundPoke = pokeArray.find(pokemon => pokemon.id === parseInt(e.target.id))
		// and then we're going to grab the index number of that pokemon
		// so we know it's position in the array
		// BEFORE we delete it
		// then we're going to send our DELETE request
		let foundPokeIndex = parseInt(pokeArray.indexOf(foundPoke))
		fetch(`${pokeURL}/${e.target.id}`, {
			method: "DELETE"
		})
		// after the pokemon has been deleted we're going to OPTIMISITICALLY
		// remove the pokemon from the DOM
		// by splicing the original pokearray
		pokeArray.splice(foundPokeIndex, 1)
		// then I'm rerendering the pokemon on the DOM 
		let delPokeHTML = pokeArray.map(pokemon => {
			return renderSinglePokemon(pokemon)
		})
		pokeContainer.innerHTML = delPokeHTML.join("")
	}


	// ** FUNCTIONS THAT RETURN HTML ** //

	// this function takes in a pokemon id and returns HTML to make a
	// edit form to append to a pokemon card
	function renderEditForm(pokeId){
		return `
			<form class="form" id="edit-pokemon-form" action="index.html" method="post">
				<label for="name">Name: </label>
				<input id="edit-poke-name" type="text" name="name" value="">
				<label for="front-sprite">Front Image: </label>
				<input id="edit-poke-front-sprite" type="text" name="front-sprite" value="">
				<label for="back-sprite">Back Sprite: </label>
				<input id="edit-poke-back-sprite" type="text" name="back-sprite" value="">
				<button type="submit" name="button" data-id="edit-btn" id="${pokeId}">Edit That Pokemon!</button>
			</form>
		`
	}

	// this function takes in a pokemon object and returns HTML to make a
	// pokemon card
	function renderSinglePokemon(pokemon){
		return `
		<div class="pokemon-container">
			<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
					<h1 class="center-text">${pokemon.name}</h1>
					<div style="width:239px;margin:auto">
						<div style="width:96px;margin:auto">
							<img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
							<button id="${pokemon.id}" data-id="edit"> edit</button>
							<button id="${pokemon.id}" data-id="delete"> delete </button>
						</div>
					</div>
				</div>
			</div>
		`
	}
	// ** END OF HTML FUNCTIONS ** //

	fetchPokemon();
})
