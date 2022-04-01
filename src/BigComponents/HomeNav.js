import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavComponent from "../SmallComponents/NavComponent";
import logo from "../logo.png";

export default class HomeNavbar extends Component {
  render() {
    return (
      <Navbar
        className="fixed-top"
        style={{ zIndex: 2, textAlign: "start" }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/" className="px-3">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavComponent id="Education" title="EDUCATION" />
            <NavComponent id="Work" title="WORK" />
            <NavComponent
              id="Projects"
              block="start"
              inline="start"
              title="PROJECTS"
            />
            <NavComponent id="Contact" title="CONTACT" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
