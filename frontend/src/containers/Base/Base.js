import React, {Component} from "react";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import NavBar from "./../../containers/NavBar/NavBar";
import Footer from "./../../containers/Footer/Footer";
import PostList from "./../../containers/PostList/PostList";
import About from "../About/About";

class Base extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <About/>
                <Footer/>
            </div>
        );
    }
}

export default Base;