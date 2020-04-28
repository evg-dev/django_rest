import React, {Component} from "react";
import TagsListView from "../../components/TagsListView/TagsListView";
import {Route, Switch} from "react-router-dom";
import Tag from "../Tags/Tag/Tag";

class Tags extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/tag/" component={TagsListView}/>
                    <Route path="/tag/:tag__slug/page/:page_tag/" component={Tag}/>
                    <Route path="/tag/:tag__slug/" component={Tag}/>
                </Switch>
            </div>
        );
    }
}

export default Tags;