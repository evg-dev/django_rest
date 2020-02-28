import React, {Component} from "react";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <header>
                <h1>Test NavBar</h1>
                <ul>
                    {this.state.data.map(category => {
                        return (
                            <li class="category">
                                <a href={category.slug}>{category.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </header>
        );
    }
}

export default NavBar;