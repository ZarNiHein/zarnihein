import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class Work extends Component {
  render() {
    return (
      <Row id="Work" className="sectionStyle">
        <Col md={12} className="justify-content-md-center">
          <h1>WORK EXPERIENCE</h1>
        </Col>
        <Col md={7} className="justify-content-md-center mx-auto pt-5">
          <h4 className="pb-2">
            Freelance Web Developer at BEAKBOOK LIMITED, UK
          </h4>
          <ul className="text-left">
            <li>
              Develop database and backend system with Amazon web service(AWS)
            </li>
            <li>
              Analyze UI/UX Design, App Flow and Graph Nature for Poultry Sector
            </li>
            <li>
              Responsible for developing, testing and deploying finished project
            </li>
          </ul>
        </Col>
        <Col md={7} className="justify-content-md-center mx-auto pt-5">
          <h4 className="pb-2">Volunteer Web Developer at THATE PAN HUB</h4>
          <ul className="text-left">
            <li>Got inspired by code.org learning platform</li>
            <li>
              Developing the web platform by using React.js, p5.js, Blockly
            </li>
            <li>
              Building Dance party platform for kids to get the knowledge of
              computer science in a fun way
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}
