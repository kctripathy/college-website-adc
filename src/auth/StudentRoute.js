import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../api/user";

const StudentRoute = ({ component: Component, ...rest }) => {
  const user = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.RoleID === 4 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default StudentRoute;
