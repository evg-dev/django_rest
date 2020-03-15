import React, {Component} from "react";
import {BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import NavBar from "./../../containers/NavBar/NavBar";
import Footer from "./../../containers/Footer/Footer";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import Categories from "../Categories/Categories";
import About from "../About/About";
import Post from "../Posts/Post/Post";
import getSlug from "../../components/PostList/PostView/PostView";
import PostList from "../../components/PostList/PostList";
import post from "../Posts/Post/Post";
import Category from "../Categories/Category/Category";
import Tag from "../Tags/Tag/Tag";

class Base extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/tag/:tag__slug" component={Tag}/>
                    <Route path="/tag/" component={Tags}/>
                    <Route path="/about/" component={About}/>
                    <Route exact path="/category/:category__slug" component={Category}/>
                    <Route path="/category/" component={Categories}/>
                    <Route exact path="/" component={Posts}/>
                    <Route exact path="/:post__slug" component={Post}/>
                </Switch>
            </div>
        );
    }
}

export default Base;