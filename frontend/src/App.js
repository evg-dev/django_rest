import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Base from "./containers/Base/Base";


class App extends Component {

    render() {
        return (
            <Route path="/" component={Base}/>
        );
    }
}

export default App;
