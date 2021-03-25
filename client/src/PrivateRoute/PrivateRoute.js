import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthContextProvider';


const PrivateRoute = ({component: Component, ...rest}) => {
const {user} = useContext(AuthContext);
    return (
        <Route {...rest} render={props => (
            user ?
                <Component {...props} />
            : <Redirect to="/Login" />
        )} />
    );
};

export default PrivateRoute;