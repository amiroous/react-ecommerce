import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const NavBar = ({location}) => {
    
    const activeRoute = location.pathname.substring(1);
    
    return (
        <Navbar bg="gradient-primary" variant="dark" expand="md">
            <Link className="navbar-brand" to="/">BlueTech</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className={`nav-link${activeRoute ? '' : ' active'}`} to="/">Home</Link>
                    <Link className={`nav-link${activeRoute === 'shop' ? ' active' : ''}`} to="/shop">Shop</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(NavBar);
