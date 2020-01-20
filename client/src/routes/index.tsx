import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Register} from "../modules/register/Register";
import React from "react";

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
);
