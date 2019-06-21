document.addEventListener("DOMContentLoaded", () => {
  const API_URL = 'https://pure-escarpment-11919.herokuapp.com/api/v1'

  let counter = 1

  const tbody = document.querySelector('tbody')
  const form = document.querySelector('form.ui.form')

  const createAnimalRow = (animal) => {

    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="four wide"><img src='https://loremflickr.com/150/150/${animal.attributes.species_name}?random=${counter}' /></td>
      <td class="four wide">${animal.attributes.name}</td>
      <td class="four wide">${animal.attributes.diet}</td>
      <td class="four wide">${animal.attributes.species_name}</td>
    `
    counter++
    return tr
  }

  fetch(`${API_URL}/animals`)
    .then(res => res.json())
    .then(({ data }) => {
      // console.log('here is the response from the API', animals);
      // debugger
      data.map(createAnimalRow).forEach(animal => {
        // debugger
        tbody.appendChild(animal)
      })
    })


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e);
    const name = form.querySelector('#animal-name').value
    const species_name = form.querySelector('#animal-species').value
    const diet = form.querySelector('#animal-diet .selected').dataset.value
    const image_url = form.querySelector('#animal-image_url').value
    // const newAnimalRow = createAnimalRow({name: name})
    // tbody.appendChild(newAnimalRow)
    fetch(
      `${API_URL}/animals`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          image_url: image_url,
          species_name: species_name,
          diet: diet
        })
      }
    )
      .then(res => res.json())
      .then(({ data }) => {

        const newAnimalRow = createAnimalRow(data)
        tbody.appendChild(newAnimalRow)
      })
  })
})
