import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
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
