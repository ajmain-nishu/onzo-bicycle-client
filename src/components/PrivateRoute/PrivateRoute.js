import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';



// private route section
const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading: setIsLoading} = useAuth()
    
    if (setIsLoading) {

        // spinner
        return <div className="text-center p-5">
                <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        
    }
    return (
        <div>
            <Route
            {...rest}
            render = {({location}) => user.email ? children : <Redirect to={{
                pathname: '/login',
                state: {from: location}
            }}></Redirect>}
        >
        </Route>
        </div>
    );
};



export default PrivateRoute;