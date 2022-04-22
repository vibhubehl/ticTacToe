import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.tsx";
import GameWindow from './GameWindow.tsx';

export default class AppShell extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/GameWindow" element={<GameWindow/>} />
            </Routes>
        )
    }
}