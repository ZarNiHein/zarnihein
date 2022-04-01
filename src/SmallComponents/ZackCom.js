import React, { Component } from "react";
import { Card, Col, Row, Carousel } from "react-bootstrap";

import ZACKCOM from "../Images/ZACKCOM.png";
import zackcompdetail from "../Images/zackcompdetail.png";
import zackcomplist from "../Images/zackcomplist.png";

export default class ZackCom extends Component {
  render() {
    return (
      <Col md={12} className="justify-content-md-center pt-5">
        <Card className="cardStyle">
          <Row>
            <Col className="my-auto" xl={4} lg={5} md={12}>
              <Card.Body className="p-0">
                <Card.Title className="cardTitleStyle pt-2">
                  <div>ZACK-COM</div>
                  <div>E-COMMERCE APP</div>
                </Card.Title>
                <Card.Text className="m-0">
                  Easy, Fast and Reliable e-commerce app in Myanmar developed by
                  ZAR NI HEIN (ZACK). Authorization and Authentication feature
                  is managed using AWS Cognito.
                </Card.Text>
                <Card.Link
                  target="blank"
                  href="https://master.d3eqy6ypj7w6s7.amplifyapp.com"
                >
                  Explore
                </Card.Link>
              </Card.Body>
            </Col>
            <Col xl={8} lg={7} md={12}>
              <Carousel className="h-100">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ZACKCOM}
                    alt="ZACK COM LANDING PAGE "
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={zackcomplist}
                    alt="PRODUCT LIST"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={zackcompdetail}
                    alt="PRODUCT DETAIL"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}
