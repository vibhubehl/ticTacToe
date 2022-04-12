import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage.tsx";
import history from './History.tsx';
import GameWindow from './GameWindow.tsx';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/GameWindow" component={GameWindow} />
                </Switch>
            </Router>
        )
    }
}