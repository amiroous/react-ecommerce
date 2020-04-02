import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavBarItem from "components/NavBarItem/NavBarItem";

const NavBar = () => {
    return (
        <Navbar bg="gradient-primary" variant="dark" expand="md">
            <Navbar.Brand href="#home">React E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavBarItem title="Home" href="#"/>
                    <NavBarItem title="Shop" href="#"/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
