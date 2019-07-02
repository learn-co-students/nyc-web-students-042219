import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log('sushi container', props)
  return (
    <Fragment>
      <div className="belt">
        // we have passed down all of the sushi as a prop
        // then we need to map over all of the sushis and for each sushi
        // create a Sushi component with props of key, sushi, and eatASushi
        {props.sushis.map(sushi => {
          return <Sushi key={sushi.id} sushi={sushi} eatASushi={props.eatASushi}/>
        })
        }
        // we need to pass down the fn getMoreSushi so that the Btn
        // can use this fn as a callback on the click 
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
