import React from 'react'

class HogCard extends React.Component {
  state = {
    open: false
  }

  toggleDetails = () => {
    this.setState({
      open: !this.state.open
    })
  }

  showDetails = () => {
    if(this.state.open){
      return (
        <div>
          <p>{this.props.specialty}</p>
          <p>This piggy is{this.props.greased ? "" : " not"} a greasy piggy</p>
          <p>Weight: {this.props.weight}</p>
          <p>Highest Medal: {this.props.medal}</p>
        </div>
      )
    } else {
      return null
    }
  }

  render(){
    const fileName = this.props.name.replace(/\s/g, "_").toLowerCase() + ".jpg"

    return (
      <div onClick={this.toggleDetails} >
        <h4>{this.props.name}</h4>
        <img src={require(`../hog-imgs/${fileName}`)} alt={this.props.name}/>
        {this.showDetails()}
      </div>
    )
  }
}

export default HogCard

// specialty: 'Mediocre magic',
// greased: false,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
// 'highest medal achieved': 'bronze'