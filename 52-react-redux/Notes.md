React Redux Notes
================

0. Google everything

High level run down

## Setting Up Redux
1. Install `redux` and `react-redux`
2. Import `Provider` and wrap around `App`
3. Create and import reducer into index.js
4. Import and run `createStore` in index.js, passing reducer as argument to `createStore`. Store in some variable `const store = createStore(reducer)`
5. Pass store as `store` prop to `Provider`


## Reading From Redux Store
1. Add some default state to your reducer
```js
// in reducer
const defaultState = {
  beef: null
}
```
2. Import connect `import { connect } from 'react-redux'`
3. Write a mapStateToProps function in the component you want to have access to state
4. Wrap component with connect (`connect()(TargetComponent)`)
5. Pass mapStateToProps as argument to connect (`connect(msp)(TargetComponent)`)
6. Inside mapStateToProps, return an object and choose which values from state you want to show up as a prop

```js
//in component
function mapStateToProps(state){
  return {
    beef: state.beef
  }
}
```

7. Use value inside component via props (`this.props.beef`)

## Wrtiting to Redux Store
1. Write a case statement inside reducer
```js
function reducer(prevState, action){
  switch(action.type){
    case "NEW_BEEF":
      return {...prevState, beef: action.payload}
    default 
      return prevState
  }
}
```
2. Write a mapDispatchToProps function in the target component
3. Import connect
4. Wrap target component with connect `connect()(TargetComponent)`
5. Pass mapDispatchToProps to connect as the 2nd argument  `connect(null, mdp)(TargetComponent)`
6. Return an object within mapDispatchToProps
```js
function mdp(dispatch){
  return {

  }
}
```
7. Write an anonymous function and decide what key it will be within props
```js
function mdp(dispatch){
  return {
    newBeef: () => {}
  }
}
```
8. Dispatch within this anonymous function with a type and (maybe) a payload
```js
function mdp(dispatch){
  return {
    newBeef: (incomingBeef) => {
      dispatch({type: "NEW_BEEF", payload: incomingBeef})
    }
  }
}
```
9. Figure out where to call this function within the component (where you would have setState normally in React)