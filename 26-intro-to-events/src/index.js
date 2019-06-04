console.log('%c Hello lol', 'color:goldenrod')


// user to add a comment through the form and add it to the page


   const comment = document.querySelector('#new-comment')
const commentForm = document.querySelector('#comment-form')
// console.log(commentForm)

comment.value



commentForm.addEventListener('submit', function(event) {
  event.preventDefault()


  const commentContainer = document.querySelector('#comments-container')

  const para = document.createElement('p')
  para.innerText = comment.value


  commentContainer.appendChild(para)
  commentForm.reset()
})

//
// const alertButton = document.querySelector('#alert')
//
// alertButton.addEventListener('click', function(e) {
//   // alert('got em coach')
//   // debugger;
//
// })

const buttonParent = document.querySelector('#button-parent')

buttonParent.addEventListener('click', function(e){

  // e.target
  if (e.target.dataset.id === 'coolId' ) {
    debugger;
  }
  if (e.target.dataset.name === 'log') {
    console.log('yesssssss!')
  }

})
