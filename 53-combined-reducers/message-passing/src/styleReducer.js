const defaultState = {
  backgroundColor: "white",
  loading: true
}

function styleReducer(prevState = defaultState, action){

  console.log("STYLISH ACTION", action)

  switch(action.type){
    case "HOTTER":
      return {...prevState, backgroundColor: action.payload.backgroundColor}
    case "COLDER":
      return {...prevState, backgroundColor: action.payload.backgroundColor}
    default:
      return prevState
  }

}

export default styleReducer
