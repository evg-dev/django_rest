import React, {Component} from "react";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import NavBar from "./../../containers/NavBar/NavBar";
import Footer from "./../../containers/Footer/Footer";
import PostList from "./../../containers/PostList/PostList";
import Tags from "../Tags/Tags";
import Category from "./../../containers/Category/Category";
import About from "../About/About";


class Base extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={PostList}/>
                    <Route path="/category/" component={Category}/>
                    <Route path="/tags/" component={Tags}/>
                    <Route path="/about/" component={About}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Base;