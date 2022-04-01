import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class Education extends Component {
  render() {
    return (
      <Row id="Education" className="sectionStyle">
        <Col md={12} className="justify-content-md-center">
          <h1>EDUCATION</h1>
        </Col>
        <Col md={7} className="justify-content-md-center mx-auto pt-4">
          <h4 className="pb-2">Mechanical Engineering Student</h4>
          <h5>(Yangon Technological University)</h5>
        </Col>
      </Row>
    );
  }
}
