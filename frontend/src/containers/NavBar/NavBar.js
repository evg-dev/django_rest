import React, {Component} from "react";
import {BrowserRouter, Route, NavLink, Switch, withRouter} from "react-router-dom";
import About from "../About/About";

class NavBar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/tags/'>Tags</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about/'>About</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;