import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavComponent extends Component {
  render() {
    const { block, inline, title, id } = this.props;
    return (
      <Nav.Link
        className="navStyle"
        as={Link}
        onClick={() => {
          document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: block === null ? "center" : block,
            inline: inline === null ? "center" : inline,
          });
        }}
      >
        <span>{title}</span>
      </Nav.Link>
    );
  }
}
