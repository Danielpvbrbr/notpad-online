import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login'
import Registro from '../Registro'
import App from '../App'

export default function Routes(){ 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={App} />
                <Route path="/registro" component={Registro} />
            </Switch>
        </BrowserRouter>
    )
   
};
  