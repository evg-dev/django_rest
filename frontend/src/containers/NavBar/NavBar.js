import React, {Component, useState} from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {BrowserRouter, Route, NavLink, Switch, withRouter} from "react-router-dom";
import About from "../About/About";


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.dropdown = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle(e) {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div ref={this.dropdown}>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle tag="button" type="button" className="form-control" caret>
                        Menu
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                        <DropdownItem><NavLink to='/'>Home</NavLink></DropdownItem>
                        <DropdownItem><NavLink to='/category/'>Categories</NavLink></DropdownItem>
                        <DropdownItem><NavLink to='/tag/'>Tags</NavLink></DropdownItem>
                        <DropdownItem><NavLink to='/about/'>About</NavLink></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default NavBar;