import React from "react";
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = (props) => {
    const authValues = localStorage.getItem('slido-clone_auth')
    if (authValues) {
        return <Route {...props} />
    }else{
        return <Redirect to={{pathname: '/login', state: {from: props.location.pathname}}}/>
    }
}
export default PrivateRoute