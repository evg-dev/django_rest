// Entry point
import React, {Component} from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Link, BrowserRouter} from "react-router-dom";

import App from "./App";


const store = createStore(() => {
}, {});


render(
    <Provider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);