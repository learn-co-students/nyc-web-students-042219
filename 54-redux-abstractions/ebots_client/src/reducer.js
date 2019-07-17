const defaultState = {
  currentUser: null
}

function reducer(state = defaultState, action){
  switch(action.type){
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.payload}
    case "LOG_OUT":
      return {...state, currentUser: null}
    default:
      return state
  }
}

export default reducer