import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = props => {
  // for this to work with the Switch component, it should return a Route component
  return (
    <Route
      path={props.path}
      render={routeProps => {
        // this will determine if the component is rendered or if the user is redirected
        if (props.isSignedIn) {
          const Component = props.component;
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
  // if (props.isSignedIn) {
  //   return <Route path={props.path} component={props.component} />;
  // } else {
  //   return <Redirect to="/" />;
  // }
};

export default ProtectedRoute;
