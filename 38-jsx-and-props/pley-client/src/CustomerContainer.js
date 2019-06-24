import React from 'react'
import CustomerCard from './CustomerCard'

class CustomerContainer extends React.Component {
  render(){
    return (
      <div style={{borderStyle: "solid"}}>
        <h3>{this.props.category}</h3>
        <CustomerCard name="Jake"/>
        <CustomerCard name="Augustus" />
        <CustomerCard name="Catherine"/>
        <CustomerCard name="Adam"/>
        <CustomerCard name="Qun"/>
      </div>
    )
  }
}

export default CustomerContainer