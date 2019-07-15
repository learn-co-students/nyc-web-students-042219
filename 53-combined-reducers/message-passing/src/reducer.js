const defaultState = {
    likes: 0,
    text: "",
    darkMode: false,
    spicy_thangs: [
      {name: "Sriracha", heat: "🌶🌶🌶"}, 
      {name: "Caroline Reaper", heat: "🌶🌶🌶🌶🌶🌶"},
      {name: "Ghost Pepper", heat: "🌶🌶🌶🌶🌶"},
      {name: "Tabasco", heat: "🌶🌶"},
      {name: "Spicy Mayo", heat: "🌶"}
    ],
    loading: true
  }

function reducer(prevState = defaultState, action){
  // console.log("STATE", prevState)
  console.log("SPICY ACTION", action)
  // whatever is returned from this function (i.e. the reducer) BECOMES state
  switch(action.type){
    case "INCREMENT_LIKES":
      return {...prevState, likes: prevState.likes + 1}
    case "DECREMENT_LIKES":
      return {...prevState, likes: prevState.likes - 1}
    case "TOGGLE_DARK":
      return {...prevState, darkMode: !prevState.darkMode}
    case "INPUT_CHANGE":
      return {...prevState, text: action.payload}
    case "HOTTER":
      const newSpicyThangs = prevState.spicy_thangs.map(thang => {
          if(thang.name === action.payload.name){
            return {...thang, heat: thang.heat + "🌶"}
          } else {
            return thang
          }
        })

      return {...prevState, spicy_thangs: newSpicyThangs}
    case "COLDER":
      const newSpicyThangs2 = prevState.spicy_thangs.map(thang => {
          if(thang.name === action.payload.name){
            return {...thang, heat: thang.heat.slice(0, thang.heat.length - 2)}
          } else {
            return thang
          }
        })

      return {...prevState, spicy_thangs: newSpicyThangs2}
    default:
      return prevState
  }

}

export default reducer