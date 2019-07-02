import React from 'react'

const MoreButton = (props) => {
    // we need to pass in our callback function here! 
    return <button onClick={props.getMoreSushi}>
            More sushi!
          </button>
}

export default MoreButton
