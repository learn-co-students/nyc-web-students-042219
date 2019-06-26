import React from 'react'

class CustomerPage extends React.Component {

  render(){
    return (
      <div className="customer-page">
        <h1>CUSTOMER PAGE</h1>
        {this.props.name}
      </div>
    )
  }
}

export default CustomerPage