window.addEventListener('DOMContentLoaded', () => {

  // Find button tag
  let button = document.getElementById('button')
  // console.log(button);

  // Add event listener to the button
  // If winter is clicked, make birds fly south
    // Change seagull img and change inner text to say summer
  // If summer is clicked, make birds fly north
    // Change seagull img back and change inner text to say winter
  button.addEventListener('click', () => {
    // Find seagull images
    let seagull1 = document.getElementById('seagull1')
    let seagull2 = document.getElementById('seagull2')
    let seagull3 = document.getElementById('seagull3')

    if (button.innerText === 'WINTER') {
      button.innerText = 'SUMMER'
      seagull1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RfIWxg9PfoixZoxioOF4fhH6SHTksedMRZHrPqOeMj7vtseaBw'
      seagull2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RfIWxg9PfoixZoxioOF4fhH6SHTksedMRZHrPqOeMj7vtseaBw'
      seagull3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RfIWxg9PfoixZoxioOF4fhH6SHTksedMRZHrPqOeMj7vtseaBw'
    } else if (button.innerText === 'SUMMER') {
      button.innerText = 'WINTER'
      seagull1.src = 'https://i.dailymail.co.uk/i/pix/2013/11/18/article-2509211-197B51D800000578-664_634x403.jpg'
      seagull2.src = 'https://i.dailymail.co.uk/i/pix/2013/11/18/article-2509211-197B51D800000578-664_634x403.jpg'
      seagull3.src = 'https://i.dailymail.co.uk/i/pix/2013/11/18/article-2509211-197B51D800000578-664_634x403.jpg'
    }

  })

})
