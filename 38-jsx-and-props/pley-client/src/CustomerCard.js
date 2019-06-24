import React from 'react'

class CustomerCard extends React.Component {
  render(){
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default CustomerCard