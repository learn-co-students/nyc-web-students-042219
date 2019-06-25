import React from 'react'

class NavOptions extends React.Component {

  // constructor(props){
  //   super()

  //   this.fetchCustomers = this.fetchCustomers.bind(this)
  // }

  state = {
    customers: []
  }

  fetchCustomers = () => {
    fetch("http://localhost:3000/api/v1/customers")
    .then(res => res.json())
    .then(data => {
      // this is a no no
      // this is called mutating state
      // this.state.customers = data
      // this.forceUpdate()

      // setState triggers a rerender
      this.setState({customers: data})
    })
  }

  render(){
    console.log(this.state.customers)

    return (
      <div className="options">
        <button onClick={this.fetchCustomers}>Get Customers!</button>
        <button>Profile</button>
        <button>Sign out</button>
      </div>
    )
  }
}

export default NavOptions