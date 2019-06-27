import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component {

  render(){
    return (
      <div>
        {
          this.props.hogs.map(hog => {
            return <HogCard key={hog.name} {...hog} />
          })
        }
      </div>
    )
  }
}

export default HogContainer