import React,{ useContext }  from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
