import "./App.css";
// import Typed from "react-typed";
import HomeNavbar from "./Components/HomeNav";
import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Carousel,
  Nav,
} from "react-bootstrap";
import Profile from "./Images/ZARNIHEIN.jpg";
import ZACKCOM from "./Images/ZACKCOM.png";
import zackcompdetail from "./Images/zackcompdetail.png";
import zackcomplist from "./Images/zackcomplist.png";
import AIRPIO from "./Images/AIRPIO.png";
import airpiobh from "./Images/airpiobh.png";
import airpiohr from "./Images/airpiohr.png";
import airpiotr from "./Images/airpiotr.png";
import airpiocp from "./Images/airpiocp.png";
import BEAKBOOK from "./Images/BEAKBOOK.png";
import beakbookhp from "./Images/beakbookhp.png";
import beakbookbt from "./Images/beakbookbt.png";
import beakbookab from "./Images/beakbookab.png";
import PageFooter from "./Components/PageFooter";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          params={{
            particles: {
              number: {
                value: 15,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            },
          }}
        />
        <HomeNavbar />
        <Container className="titleStyle pt-5">
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
              {/* <Typed className="type-text font-weight-bold h1" strings={["ZAR NI HEIN"]} typeSpeed={40} backSpeed={60} loop /> */}
              <h5 className="pt-5">
                A motivated, adaptable and responsible final year student with a
                passion for developing creative digital solutions with the
                knowledge and technical skills gained from my projects. Being a
                strategic thinker and a good listener applies me to learn and
                adapt to fit into any environment. With my interpersonal skills,
                I am willing to communicate with customers until their
                requirements meet.
              </h5>
            </Col>
          </Row>
          <Row id="Education" className="sectionStyle">
            <Col md={12} className="justify-content-md-center">
              <h1>EDUCATION</h1>
            </Col>
            <Col md={7} className="justify-content-md-center mx-auto pt-5">
              <h4 className="pb-2">Mechanical Engineering Student</h4>
              <h5>(Yangon Technological University)</h5>
            </Col>
          </Row>
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
                  Develop database and backend system with Amazon web
                  service(AWS)
                </li>
                <li>
                  Analyze UI/UX Design, App Flow and Graph Nature for Poultry
                  Sector
                </li>
                <li>
                  Responsible for developing, testing and deploying finished
                  project
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
          <Row id="Projects" className="sectionStyle">
            <Col md={12} className="justify-content-md-center">
              <h1>PROJECTS</h1>
            </Col>
            <Col md={12} className="justify-content-md-center pt-5">
              <Card className="cardStyle">
                <Row>
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
                  <Col className="my-auto" xl={4} lg={5} md={12}>
                    <Card.Body className="p-0">
                      <Card.Title className="cardTitleStyle pt-2">
                        <div>ZACK-COM</div>
                        <div>E-COMMERCE APP</div>
                      </Card.Title>
                      <Card.Text className="m-0">
                        Easy, Fast and Reliable e-commerce app in Myanmar
                        developed by ZAR NI HEIN (ZACK). Authorization and
                        Authentication feature is managed using AWS Cognito.
                      </Card.Text>
                      <Card.Link
                        target="blank"
                        href="https://master.d3eqy6ypj7w6s7.amplifyapp.com"
                      >
                        Explore
                      </Card.Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={12} className="justify-content-md-center pt-5">
              <Card className="cardStyle">
                <Row>
                  <Col className="my-auto" xl={4} lg={5} md={12}>
                    <Card.Body className="p-0">
                      <Card.Title className="cardTitleStyle pt-2">
                        AIR PIO COVID-19 DASHBOARD APP
                      </Card.Title>
                      <Card.Text className="m-0">
                        AIR-PIO aim to solve the air pollution problem around
                        Yangon. By Visualization, we describe "Air Pollution"
                        information before and during COVID-19.
                      </Card.Text>
                      <Card.Link
                        target="blank"
                        href="https://air-pio.netlify.app"
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
                          src={AIRPIO}
                          alt="ZACK COM LANDING PAGE "
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={airpiobh}
                          alt="PRODUCT LIST"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={airpiocp}
                          alt="PRODUCT DETAIL"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={airpiohr}
                          alt="PRODUCT DETAIL"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={airpiotr}
                          alt="PRODUCT DETAIL"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={12} className="justify-content-md-center pt-5">
              <Card className="cardStyle">
                <Row>
                  <Col xl={8} lg={7} md={12}>
                    <Carousel className="h-100">
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={beakbookhp}
                          alt="ZACK COM LANDING PAGE "
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={beakbookab}
                          alt="PRODUCT LIST"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={beakbookbt}
                          alt="PRODUCT DETAIL"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={BEAKBOOK}
                          alt="PRODUCT DETAIL"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  <Col className="my-auto" xl={4} lg={5} md={12}>
                    <Card.Body className="p-0">
                      <Card.Title className="cardTitleStyle pt-2">
                        BEAKBOOK WEB APP
                      </Card.Title>
                      <Card.Text className="m-0">
                        Beakbook Limited is an Imperial College London spin-out
                        focusing on poultry tech. We are developing data
                        analytic tools and robust hardware to lower feed bills
                        and support animal welfare.
                      </Card.Text>
                      <Card.Link
                        target="blank"
                        href="https://dev.dabp7j8blglx3.amplifyapp.com"
                      >
                        Explore
                      </Card.Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
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
              <p>Email: zarnihein2312@gmail.com</p>
              <p>Telephone: +959452101816</p>
            </Col>
          </Row>
        </Container>
        <PageFooter />
      </div>
    );
  }
}

export default App;
