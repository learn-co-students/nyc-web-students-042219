import React from 'react'

export default function (TargetComponent){
  return class extends React.Component {
    state = {
      times: 0
    }

    click = () => {
      this.setState({
        times: this.state.times + 1
      })
    }


    render(){
      if (this.state.times > 3){
        return <iframe width="560" height="315" src="https://www.youtube.com/embed/ieQq9pGGs-I?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="ad"></iframe>
      } else {
        return (
          <div onClick={this.click}>
            <button>Show ad</button>
           <TargetComponent {...this.props}/>
          </div>
        )
      }
    }
  }
}

