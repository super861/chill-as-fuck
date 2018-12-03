import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class NavBar extends Component {
    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Chill as fuck</NavbarBrand>
                    <Nav className ="m1-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Twitch</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Games</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Events</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

