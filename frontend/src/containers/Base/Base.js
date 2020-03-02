import React, {Component} from "react";
import {BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import NavBar from "./../../containers/NavBar/NavBar";
import Footer from "./../../containers/Footer/Footer";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import Category from "./../../containers/Category/Category";
import About from "../About/About";
import Post from "../Posts/Post/Post";
import PostView from "../../components/PostList/PostView/PostView";
import PostList from "../../components/PostList/PostList";


class Base extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Posts}/>
                    <Route path="/category/" component={Category}/>
                    <Route path="/tags/" component={Tags}/>
                    <Route path="/about/" component={About}/>
                    <Route exact path="/:slug" component={Post}/>
                </Switch>
            </div>
        );
    }
}

export default Base;