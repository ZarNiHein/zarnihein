import React, { Component } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";

export default class ProjectComponent extends Component {
  render() {
    const {
      title,
      sub_title,
      content,
      url,
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
    } = this.props;

    return (
      <Col md={12} className="justify-content-md-center pt-4">
        <Card className="cardStyle">
          <Row>
            <Col className="my-auto" xl={4} lg={5} md={12}>
              <Card.Body className="p-0">
                <Card.Title className="cardTitleStyle pt-2">
                  <div>{title}</div>
                  <div>{sub_title}</div>
                </Card.Title>
                <Card.Text className="m-0">{content}</Card.Text>
                <Card.Link target="blank" href={url}>
                  Explore
                </Card.Link>
              </Card.Body>
            </Col>
            <Col xl={8} lg={7} md={12}>
              <Carousel className="h-100">
                {imageOne && (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageOne}
                      alt={`${title} LANDING PAGE`}
                    />
                  </Carousel.Item>
                )}
                {imageTwo && (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageTwo}
                      alt={`${title} LIST`}
                    />
                  </Carousel.Item>
                )}
                {imageThree && (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageThree}
                      alt={`${title} DETAIL`}
                    />
                  </Carousel.Item>
                )}
                {imageFour && (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageFour}
                      alt={`${title} DETAIL`}
                    />
                  </Carousel.Item>
                )}
                {imageFive && (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageFive}
                      alt={`${title} DETAIL`}
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}
