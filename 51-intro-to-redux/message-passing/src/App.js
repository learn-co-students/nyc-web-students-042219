import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App (props) {

  const dispatch = () => {}

  const renderHotThangs = () => {
    return props.spicy_thangs.map(thang => {
      return <div key={thang.name}>
        <h3>{thang.name}</h3>
        <p>{thang.heat}</p>
        <button onClick={() => props.colder(thang.name)}>Not so hot!</button>
        <button onClick={() => props.hotter(thang.name)}>Yowzers!</button>
      </div>
    })
  }


  console.log("APP PROPS", props)

  return (
    <div className={"App" + (props.darkMode ? " dark" : "")}>
      <button onClick={props.toggleDark}>Dark mode</button>
      <h3>{props.text}</h3>
      <input 
        name="text" 
        value={props.text} 
        onChange={(event) => props.handleChange(event.target.value)}/>
      <h4>{props.likes} likes</h4>
      <button onClick={props.like}>
        Like<span role="img" aria-label="thumbs up">👍</span>
      </button>
      <button onClick={props.dislike}>
        Dislike <span role="img" aria-label="thumbs down">👎</span>
      </button>
      {renderHotThangs()}
    </div>
  );
} // end of App


function mapStateToProps(state){
  // whatever object is returned from MSP will be combined with this component's props
  return state
}

function mapDispatchToProps(dispatch){

  return {
    like: () => {
      dispatch({type: "INCREMENT_LIKES"})
    },
    dislike: () => {
      dispatch({type: "DECREMENT_LIKES"})
    },
    toggleDark: () => {
      dispatch({type: "TOGGLE_DARK"})
    },
    handleChange: (text) => {
      dispatch({type: "INPUT_CHANGE", payload: text})
    },
    hotter: (name) => {
      dispatch({type: "HOTTER", payload: name})
    },
    colder: (name) => {
      dispatch({type: "COLDER", payload: name})
    }
  }
}


// connect connects this component to the store
// takes 2 arguments: 1. mapStateToProps, 2. mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);






