import React, {Component} from "react";
import CategoryListView from "../../components/CategoryListView/CategoryListView";
import {Route, Switch} from "react-router-dom";
import Posts from "../Posts/Posts";
import Tags from "../Tags/Tags";
import About from "../About/About";
import Category from "../../containers/Categories/Category/Category";
import Tag from "../Tags/Tag/Tag";
import Post from "../Posts/Post/Post";

class Categories extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/category/" component={CategoryListView}/>
                    <Route path="/category/:category__slug/" component={Category}/>
                </Switch>
            </div>
        );
    }
}

export default Categories;