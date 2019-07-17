function login(user){
  return {type: "SET_CURRENT_USER", payload: user}
}

function logout(){
  return {type: "LOG_OUT"}
}

export {
  login,
  logout
}