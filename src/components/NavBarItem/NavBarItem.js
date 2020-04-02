import React from 'react';
import Nav from "react-bootstrap/Nav";

const NavBarItem = ({title, href}) => {
    return (
        <Nav.Link href={`#${href}`}>{title}</Nav.Link>
    );
};

export default NavBarItem;
