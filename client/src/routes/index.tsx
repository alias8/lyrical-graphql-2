import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import React from "react";
import {Header} from "../components/Header";
import {NoMatch} from "../components/NoMatch";
import {Home} from "../components/Home";
import RequireAuth from "../components/RequireAuth";
import {Login} from "../modules/login";
import {Logout} from "../modules/logout";
import {Register} from "../modules/register";

export const Routes = () => (
    <BrowserRouter>
        <Header>
            <Switch>
                <Route exact={true} path="/" component={RequireAuth(Home)}/>
                <Route exact={true} path="/login" component={Login}/>
                <Route exact={true} path="/register" component={Register}/>
                <Route exact={true} path="/logout" component={Logout}/>
                <Route component={NoMatch} />
            </Switch>
        </Header>
    </BrowserRouter>
);
