Intro to Redux
==============

## SWBATs

### Redux
- [x] Install the redux library so it can be used in a project.
- [x] Create a `store` in redux with some default `state`.
- [x] Create a `reducer` to change `state` based on an `action`.
- [x] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [x] Read `state` in the `store`.

### React Redux
- [x] Install the `react-redux` library so it can be used in a project.
- [x] Make the `store` available to their application by using the `Provider` component.
- [x] Use `connect` to give components the ability to listen for changes to the `store`.
- [x] Use `dispatch` in a React component.
- [x] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [x] Rethinking in React with Redux


## Lecture Notes

Redux **will** test your JavaScript knowledge to the **MAX**!!!


### Vocabulary
- [x] Redux - global state management
- [x] state - state! holds data
- [x] store - contains the state as well as the getState and dispatch functions
- [x] reducer - used to change state (whatever is returned becomes state)
- [x] getState() - read from state
- [x] dispatch() - write to state
- [x] action - POJO containing the type and payload. Argument to dispatch
- [x] plain object - 'nuff said
- [x] type - used to determine what the reducer should do
- [x] payload - contains data that will be used to change state
- [x] mutate - something we don't do - change state directly

### React Redux
- [x] mapStateToProps() - used to grab values from redux store and add to component
- [x] mapDispatchToProps() - used to give components functions that have access to dispatch
- [x] Provider - component that sits at the top level of app and gives your React app access to the store
- [x] connect() - used to connect an individual component to the store

### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)
