import React, {Component} from "react";
import {BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import NavBar from "./../../containers/NavBar/NavBar";
import Footer from "./../../containers/Footer/Footer";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import Category from "./../../containers/Category/Category";
import About from "../About/About";
import Post from "../Posts/Post/Post";
import getSlug from "../../components/PostList/PostView/PostView";
import PostList from "../../components/PostList/PostList";
import getPostSlug from "../Posts/Post/getPostSlug";

// function getPostSlug() {
//     let {slug} = useParams();
//     return (
//             <div>Slug : {slug}</div>
//         );
// }
// const Post = () => {
//     let { slug } = useParams();
//     return (
//         <div>
//             Portfolio component
//             <p>Topic: {slug}</p>
//         </div>
//     );
// };


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
                    <Route exact path="/:slug" component={getPostSlug} />
                </Switch>
            </div>
        );
    }
}

export default Base;