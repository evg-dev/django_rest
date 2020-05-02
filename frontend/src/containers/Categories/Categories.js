import React, {Component} from "react";
import CategoryListView from "../../components/CategoryListView/CategoryListView";
import {Route, Switch} from "react-router-dom";
import Category from "../../containers/Categories/Category/Category";
import NoMatchPage from "../NoMatchPage/NoMatchPage";

class Categories extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/category/" component={CategoryListView}/>
                    <Route path="/category/:category__slug/page/:page_cat/" component={Category}/>
                    <Route path="/category/:category__slug/" component={Category}/>
                    <Route component={NoMatchPage}/>
                </Switch>
            </div>
        );
    }
}

export default Categories;