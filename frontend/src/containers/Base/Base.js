import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./../../containers/NavBar/NavBar";
import Footer from "./../../containers/Footer/Footer";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import Categories from "../Categories/Categories";
import About from "../About/About";
import Post from "../Posts/Post/Post";
import Category from "../Categories/Category/Category";
import Tag from "../Tags/Tag/Tag";


class Base extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <NavBar/>
                    <div className="main-container">
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
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Base;