import React           from 'react'
import { createBrowserHistory } from "history";
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SlidoClone from '../pages/SlidoClone';

export const history = createBrowserHistory();

const Router = () => {
    return <div>
        <Switch>
            <Route path={'/login'} component={Login}/>
            <PrivateRoute exact path={'/'} component={SlidoClone}/>
            <Route component={NotFound} />
        </Switch>
    </div>
}
export default Router