import { FETCH_CUSTOMER, FETCH_ALL_CUSTOMERS } from './types'

function fetchCustomer(customerId){
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/customers/${customerId}`)
    .then(res => res.json())
    .then(data => {
        dispatch({type: FETCH_CUSTOMER, payload: data})
    })
  }
}

function fetchCustomers(){
  return function(dispatch){

    return fetch("http://localhost:3000/api/v1/customers")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_CUSTOMERS, payload: data})
    });

  }
}

export {
  fetchCustomer,
  fetchCustomers
}

function templateAction(argsFromComponent){
  return function(dispatch){
    dispatch({type: "", payload: {}})
  }
}