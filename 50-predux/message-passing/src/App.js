import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    spicy_thangs: [
      {name: "Sriracha", heat: "🌶🌶🌶"}, 
      {name: "Caroline Reaper", heat: "🌶🌶🌶🌶🌶🌶"},
      {name: "Ghost Pepper", heat: "🌶🌶🌶🌶🌶"},
      {name: "Tabasco", heat: "🌶🌶"},
      {name: "Spicy Mayo", heat: "🌶"}
    ]
  }

  dispatch = (type, data) => {
    const newState = this.reducer(type, data)

    this.setState(newState)
  }

  reducer = (type, data) => {
    // needs the thing to identify what to do (type)
    // needs new data (data)
    // needs old data (this.state)

    switch(type){
      case "LIKE":
        return {...this.state, likes: this.state.likes + 1}
        break;
      case "DISLIKE":
        return {...this.state, likes: this.state.likes - 1}
        break;
      case "DARK":
        return {...this.state, darkMode: !this.state.darkMode}
        break;
      case "INPUT_CHANGE":
        return {...this.state, text: data}
        break;
      case "HOTTER":
        // what data do we need to make this work?
        // we need the name of the hot thang
        const newSpicyThangs = this.state.spicy_thangs.map(thang => {
          if(thang.name === data){
            return {...thang, heat: thang.heat + "🌶"}
          } else {
            return thang
          }
        })

        return {...this.state, spicy_thangs: newSpicyThangs}
      case "LESS_HOT":
        // what data do we need to make this work?
        // we need the name of the hot thang
        const newSpicyThangs2 = this.state.spicy_thangs.map(thang => {
          if(thang.name === data){
            return {...thang, heat: thang.heat.slice(0, thang.heat.length - 2)}
          } else {
            return thang
          }
        })

        return {...this.state, spicy_thangs: newSpicyThangs2}
    }

  }

  renderHotThangs = () => {
    return this.state.spicy_thangs.map(thang => {
      return <div>
        <h3>{thang.name}</h3>
        <p>{thang.heat}</p>
        <button onClick={() => this.dispatch("LESS_HOT", thang.name)}>Not so hot!</button>
        <button onClick={() => this.dispatch("HOTTER", thang.name)}>Yowzers!</button>
      </div>
    })
  }


  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch("DARK")}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(event) => this.dispatch("INPUT_CHANGE", event.target.value)}/>

        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch("LIKE")}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={() => this.dispatch("DISLIKE")}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>

        {this.renderHotThangs()}
      </div>
    );
  }
}

export default App;
