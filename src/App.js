import {BrowserRouter} from "react-router-dom";
import React from 'react';
import './App.css';
import Router from "./router/Router";

function App() {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

export default App;
