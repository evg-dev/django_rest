import React, {Component} from "react";
import TagsList from "../../components/TagsList/TagsList";
import {Route, Switch} from "react-router-dom";
import Tag from "../Tags/Tag/Tag";

class Tags extends Component {

    render() {
        return (
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