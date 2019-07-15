import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { like,  dislike,  toggleDark,  handleChange,  hotter, colder } from './actions'

function App (props) {

  const renderHotThangs = () => {
    return props.spicy_thangs.map(thang => {
      return <div key={thang.name}>
        <h3>{thang.name}</h3>
        <p>{thang.heat}</p>
        <button style={{backgroundColor: thang.heat.length > 6 ? "white" : "red"}} onClick={() => props.colder(thang.name)}>Not so hot!</button>
        <button onClick={() => props.hotter(thang.name)}>Yowzers!</button>
      </div>
    })
  }
  console.log("APP PROPS", props)
  return (
    <div className={"App" + (props.darkMode ? " dark" : "")} style={{backgroundColor: props.backgroundColor}}>
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
  console.log("MSP", state)

  return {...state.styleReducer, ...state.spiceReducer}
}

export default connect(mapStateToProps, {like, dislike, toggleDark, handleChange, hotter, colder})(App);






