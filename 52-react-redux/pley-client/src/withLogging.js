import React from 'react'

export default function (TargetComponent){
  return class extends React.Component {
  
    render(){
        console.log("HELLO!")
        return (
           <TargetComponent {...this.props}/>
        )
    }
  }
}

