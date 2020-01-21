import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Register} from "../modules/register/Register";
import React from "react";
import {LogIn} from "../modules/signin/logIn";
import {Header} from "../components/Header";
import {NoMatch} from "../components/NoMatch";
import {Home} from "../components/Home";


export const Routes = () => (
    <BrowserRouter>
        <Header>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/login" component={LogIn}/>
                <Route exact={true} path="/register" component={Register}/>
                <Route component={NoMatch} />
            </Switch>
        </Header>
    </BrowserRouter>
);
