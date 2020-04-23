import React, {Component} from "react";
import TagsList from "../../components/TagsList/TagsList";
import {Route, Switch, withRouter} from "react-router-dom";
import Tag from "../Tags/Tag/Tag";
import CategoryList from "../../components/CategoryList/CategoryList";
import Category from "../Categories/Category/Category";

// import {Router} from "react-router";

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

export default withRouter(Tags);