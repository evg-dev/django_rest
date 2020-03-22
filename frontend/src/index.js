// Entry point
import 'babel-polyfill'
import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import './App.css';

const store = createStore(() => [], {}, applyMiddleware());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);