import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        // we have access to the wallet attribute as a prop and pass it in
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            // renderPlates needs an array
            // and the return value of emptyPlates is an array
            // this creates the empty plates on the table 
            renderPlates(props.emptyPlates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
