// <!-- <tr>
{/* <td>Example Name</td>
<td>Carnivore</td>
<td>1</td> */}
// </tr> -->

document.addEventListener("DOMContentLoaded", () => {
  console.log('the DOM content has loaded');

  const tableBody = document.querySelector('table tbody')
  const form = document.querySelector('form.ui.form')

  form.addEventListener('submit', e => {
    e.preventDefault()
    const name = e.target.querySelector('#animal-name').value
    const species_name = e.target.querySelector('#animal-species').value
    const diet = e.target.querySelector('#diet-input').value

    fetch('http://localhost:3000/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        species_name,
        diet
      })
    })
      .then(r => r.json())
      .then(animal => {
        tableBody.appendChild(createAnimalRow(animal))
      })
  })

  //   created_at: "2019-06-07T14:47:38.539Z"
  // diet: "herbivore"
  // id: 1
  // name: "Augustus"
  // species_id: 2
  // updated_at: "2019-06-07T14:47:38.539Z"
  function createAnimalRow(animal) {
    // console.log(animal)
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.diet}</td>
      <td>${animal.species_name}</td>
    `
    return tr
  }

  fetch('http://localhost:3000/animals')
    .then(r => r.json())
    .then(animals => {
      console.log('response from server', animals)
      animals.forEach(animal => {
        tableBody.appendChild(createAnimalRow(animal))
      })
    })
})
