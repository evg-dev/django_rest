import React, {Component} from "react";
import TagsList from "../../components/TagsList/TagsList";
import {Route, Switch} from "react-router-dom";
import Tag from "../Tags/Tag/Tag";
import CategoryList from "../../components/CategoryList/CategoryList";
import Category from "../Categories/Category/Category";

class Tags extends Component {

    render() {
        return (
            // <TagsList/>
            <div>
                <Switch>
                    <Route exact path="/tag/" component={TagsList}/>
                    <Route path="/tag/:tag__slug/" component={Tag}/>
                </Switch>
            </div>
        );
    }
}

export default Tags;