import React, { Component } from "react";
import Profile from "../Images/ZARNIHEIN.jpg";
import { Col, Image, Row } from "react-bootstrap";

export default class Intro extends Component {
  render() {
    return (
      <Row className="sectionStyle">
        <Col
          className="d-flex justify-content-md-center align-items-md-center mx-auto"
          lg={3}
          md={6}
          xs={12}
        >
          <Image className="imageStyle" src={Profile} roundedCircle fluid />
        </Col>
        <Col
          className="justify-content-md-center align-items-center pt-5 mx-auto"
          lg={6}
          md={12}
          xs={12}
        >
          <h1 className="font-weight-bold"> ZAR NI HEIN</h1>
          <h5 className="pt-5">
            A motivated, adaptive, and responsible developer with a strong
            desire to create websites using the knowledge and technical
            abilities learned from previous projects and jobs. I am willing to
            communicate with clients and teammates to fulfil their ideas till
            their criteria are met.
          </h5>
        </Col>
      </Row>
    );
  }
}
