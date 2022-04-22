import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import GameWindow from './GameWindow';

export default class AppShell extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/gamewindow" element={<GameWindow/>} />
            </Routes>
        )
    }
}