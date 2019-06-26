import React from 'react'

class NavOptions extends React.Component {


  render(){
    return (
      <div className="options">
        <button onClick={this.props.fetchCustomers}>Get Customers!</button>
        <button>Profile</button>
        <button>Sign out</button>
      </div>
    )
  }
}

export default NavOptions