import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
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
                            <Route exact path="/" component={Posts}/>
                            <Route exact path="/about/" component={About}/>
                            <Route path="/tag/" component={withRouter(Tags)}/>
                            <Route path="/category/" component={withRouter(Categories)}/>
                            <Route path="/posts/:page/" component={Posts}/>
                            <Route path="/:post__slug/" component={Post}/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Base;