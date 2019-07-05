import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = props => {
  if (props.isSignedIn) {
    return <Route path={props.path} component={props.component} />
  } else {
    return (
      <Redirect to="/" />
    );
  }
}

export default ProtectedRoute