import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class HomeNavbar extends Component {
    render() {
        return (
            <Navbar className="fixed-top" style={{ textAlign: "start" }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    ZAR NI HEIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} onClick={() => { document.getElementById("Work").scrollIntoView({ behavior: 'smooth' }) }}>Work</Nav.Link>
                        <Nav.Link as={Link} onClick={() => { document.getElementById("Projects").scrollIntoView({ behavior: 'smooth' }) }}>Projects</Nav.Link>
                        <Nav.Link as={Link} onClick={() => { document.getElementById("Contact").scrollIntoView({ behavior: 'smooth' }) }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
