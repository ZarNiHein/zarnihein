import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

library.add(faFacebookF, faLinkedinIn);

export default class Contact extends Component {
  render() {
    return (
      <Row id="Contact" className="sectionStyle">
        <Col md={12} className="justify-content-md-center">
          <h1>CONTACT</h1>
        </Col>
        <Col md={12} className="d-flex justify-content-md-center pt-5">
          <Nav className="mx-auto">
            <Nav.Link
              target="blank"
              href="https://www.linkedin.com/in/zar-ni-hein-a6a430190"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Nav.Link>
            <Nav.Link
              target="blank"
              href="https://www.facebook.com/profile.php?id=100007201096567"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={12} className="justify-content-md-center pt-3">
          <p>
            Email:{" "}
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:zarnihein2312@example.com";
                e.preventDefault();
              }}
            >
              zarnihein2312@gmail.com
            </Link>
          </p>
          <p>
            Telephone: <a href="tel:+959452101816">+959452101816</a>
          </p>
        </Col>
      </Row>
    );
  }
}
