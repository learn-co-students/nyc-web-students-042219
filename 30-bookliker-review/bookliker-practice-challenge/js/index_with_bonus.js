/*** BONUS: API ADAPTER ***/
// provides an interface for making fetch requests
// function that returns an object
// the keys on the returned object point to functions
function createAdapter(baseUrl) {
  return {
    getAll: () => {
      return fetch(baseUrl).then(r => r.json())
    },
    update: (id, data) => {
      return fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(r => r.json())
    }
  }
}

/*** DOM Elements ***/
const bookList = document.getElementById('list')
const showPanel = document.querySelector('#show-panel')

const BASE_URL = 'http://localhost:3000/books'

// create an adapter for the books endpoint
const adapter = createAdapter(BASE_URL)

/*** Local State ***/
let books = []
let selectedBookId = null
const currentUser = { "id": 1, "username": "pouros" }


/*** Render Methods ***/
function usersToHTML(users) {
  return users.map(user => `<li>${user.username}</li>`).join("")
}

function renderOneBook() {
  console.log(selectedBookId)
  // get the book details
  const selectedBook = books.find(function (book) {
    return book.id === selectedBookId
  })
  // create the DOM node
  const div = document.createElement('div')
  div.innerHTML = `
    <h1>${selectedBook.title}</h1>
    <img src="${selectedBook.img_url}" />
    <p>${selectedBook.description}</p>
    <ul>
      ${usersToHTML(selectedBook.users)}
    </ul>
    <button data-id="${selectedBook.id}">Read Book</button>
  `
  // append to the DOM
  showPanel.innerHTML = ""
  showPanel.appendChild(div)
}

function renderAllBooks() {
  books.forEach(book => {
    const li = document.createElement('li')
    li.innerText = book.title
    li.dataset.id = book.id
    bookList.appendChild(li)
  })
}

/** Event Listeners **/
showPanel.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON") {
    console.dir(e.target)
    console.log("dataset id:", e.target.dataset.id)
    console.log("local state selected id:", selectedBookId)

    const selectedBook = books.find(function (book) {
      return book.id === selectedBookId
    })
    selectedBook.users.push({ "id": 1, "username": "pouros" })

    // optimistic!
    renderOneBook()

    adapter.update(selectedBookId, {
      "users": selectedBook.users
    })

  }
})

bookList.addEventListener('click', e => {
  const bookId = parseInt(e.target.dataset.id)
  selectedBookId = bookId
  renderOneBook()
})


/*** Intitialize the page ***/
function init() {
  adapter.getAll()
    .then(bookData => {
      console.log('initial response from server:', bookData)
      books = bookData
      // display the HTML (append to the DOM)
      renderAllBooks()
    })
}

init()