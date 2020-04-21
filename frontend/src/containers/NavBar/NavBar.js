import React, {Component, useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {BrowserRouter, Route, NavLink, Switch, withRouter} from "react-router-dom";


class NavBar extends Component {
    constructor(props) {
        super(props);

        // this.collapsed = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: false
        };
    }

    toggle(e) {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }

    render() {
        return (
            <div className="main-nav">
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle}/>
                    <NavbarBrand href="/">Assembly Point</NavbarBrand>
                    <Collapse isOpen={this.state.collapsed && window.innerWidth < 768} navbar>
                        <Nav className="mr-nav" navbar>
                            <NavItem>
                                <NavLink to='/category/'>Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/tag/'>Tags</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/about/'>About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;