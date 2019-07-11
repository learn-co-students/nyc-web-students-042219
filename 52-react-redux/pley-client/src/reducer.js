const defaultState = {
  customers: [],
  selectedCustomer: null,
  loading: true
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "FETCH_ALL_CUSTOMERS":
      return {...prevState, customers: action.payload}
    case "FETCH_CUSTOMER":
      return {...prevState, selectedCustomer: action.payload}
    case "STOP_LOADING":
      return {...prevState, loading: action.payload}

    default:
      return prevState
  }
}

export default reducer


// function called in component
// arguments from function call passed to dispatch
// dispatch calls reducer with action (type and payload)
// reducer returns some sort of modified state