/* 
  Lecture Goals

  - Review task lister
  - Event handling
  - Nested event handlers vs Event Delegation
  
  if there's time...
  - More Features™️
  - Application State
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log('%c HI!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

  // DOM Elements
  const taskForm = document.querySelector('#create-task-form')
  const taskInput = document.querySelector('#new-task-description')
  const taskList = document.querySelector('#tasks')
  // find the form
  // find the input

  // Event Listeners
  taskList.addEventListener('click', event => {
    if (event.target.dataset.action === 'delete') {
      // get the task description
      const buttonDescription = event.target.dataset.description

      // get the li based on that description
      const liToRemove = document.querySelector(`li[data-description="${buttonDescription}"]`);
      console.log(liToRemove)
      // remove it
      liToRemove.remove()
    }
  })

  // listen for form submit
  taskForm.addEventListener('submit', event => {
    console.log('i did a submit!')
    event.preventDefault()

    // save the input
    const taskDescription = taskInput.value
    console.log('task description is: ', taskDescription)

    // append to the DOM / add to the list
    // create a dom element (li tag)
    const taskLi = document.createElement('li')
    taskLi.innerText = taskDescription
    taskLi.dataset.description = taskDescription

    // create a delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    deleteButton.dataset.action = 'delete'
    deleteButton.dataset.description = taskDescription

    // append to the task
    taskLi.appendChild(deleteButton)

    // listen for a click
    // deleteButton.addEventListener('click', () => {
    //   console.log('delete me!')
    //   // remove the task
    //   taskLi.remove()
    // })

    taskList.appendChild(taskLi)

    taskForm.reset()
  })


});
