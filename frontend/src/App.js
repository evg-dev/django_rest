import React, {Component} from "react";
import {BrowserRouter, Link, Route, Switch, withRouter} from "react-router-dom";
import Base from "./containers/Base/Base";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Base}/>
            </BrowserRouter>
        );
    }
}

export default App;
