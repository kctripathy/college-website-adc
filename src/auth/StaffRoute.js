import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../api/user';


const StaffRoute = ({ component: Component, ...rest }) => {
    const user = isAuthenticated();
    return (
        <Route {...rest} render={props => user && (user.RoleID === 2 || user.RoleID === 3) ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        } />
    )
};

export default StaffRoute;