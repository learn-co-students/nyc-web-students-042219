// action creator
function like(){
  return {type: "INCREMENT_LIKES"}
}

function dislike(){
  return {type: "DECREMENT_LIKES"}
}

function toggleDark(){
  return {type: "TOGGLE_DARK"}
}

function handleChange(text){
  return {type: "INPUT_CHANGE", payload: text}
}

function hotter(name){
  return {type: "HOTTER", payload: {name: name, backgroundColor: "red"}}
}

function colder(name){
  return {type: "COLDER", payload: {name: name, backgroundColor: "blue"}}
}


export {
  like,
  dislike,
  toggleDark,
  handleChange,
  hotter, 
  colder
}
