import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  // originally we had state and the eatASushi fn in the Sushi component
  // but we decided to lift it so that the Table component would also
  // know whether a sushi has been eaten or not in order to create
  // an empty plate and affect the wallet

  // state = {
  //  eaten: false
  // }

  // eatASushi = () => {
  //   // console.log('eating a sushi');
  //   this.setState({
  //     eaten: true
  //   })
  // }


  render(){
    console.log(this.props);
    return (
      <div className="sushi">
        <div className="plate" >
          // if the sushi that we have passed down has a key of eaten
          // that evaluates to true, do "null"
          // if it evaluates to false, display an image
          { this.props.sushi.eaten
             ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" onClick={() => this.props.eatASushi(this.props.sushi)}/>
              // moved the onClick to the image in order to resolve
              // the bug that if you clicked on a plate (div above)
              // you could deduct addl sushi that a user had already "eaten"
          }
        </div>
        <h4 className="sushi-details">
          // we need to pass in the name and price here! 
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
