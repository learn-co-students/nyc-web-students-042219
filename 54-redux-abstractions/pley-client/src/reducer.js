import { FETCH_CUSTOMER, FETCH_ALL_CUSTOMERS } from './types'

const defaultState = {
  customers: [],
  selectedCustomer: null,
  loading: true
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case FETCH_ALL_CUSTOMERS:
      return {...prevState, customers: action.payload}
    case FETCH_CUSTOMER:
      return {...prevState, selectedCustomer: action.payload, loading: false}
    default:
      return prevState
  }
}

export default reducer