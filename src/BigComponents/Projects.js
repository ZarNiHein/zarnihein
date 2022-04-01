import React, { Component } from "react";
import ProjectComponent from "../SmallComponents/ProjectComponent";
import ZACKCOM from "../Images/ZACKCOM.png";
import zackcompdetail from "../Images/zackcompdetail.png";
import zackcomplist from "../Images/zackcomplist.png";
import AIRPIO from "../Images/AIRPIO.png";
import airpiobh from "../Images/airpiobh.png";
import airpiohr from "../Images/airpiohr.png";
import airpiotr from "../Images/airpiotr.png";
import airpiocp from "../Images/airpiocp.png";
import BEAKBOOK from "../Images/BEAKBOOK.png";
import beakbookhp from "../Images/beakbookhp.png";
import beakbookbt from "../Images/beakbookbt.png";
import beakbookab from "../Images/beakbookab.png";
import { Col, Row } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    return (
      <Row id="Projects" className="sectionStyle">
        <Col md={12} className="justify-content-md-center">
          <h1>PROJECTS</h1>
        </Col>
        <ProjectComponent
          title="ZACK-COM"
          sub_title="E-COMMERCE APP"
          content="Easy, Fast and Reliable e-commerce app in Myanmar developed by
                  ZAR NI HEIN (ZACK). Authorization and Authentication feature
                  is managed using AWS Cognito."
          url="https://master.d3eqy6ypj7w6s7.amplifyapp.com"
          imageOne={ZACKCOM}
          imageTwo={zackcomplist}
          imageThree={zackcompdetail}
        />
        <ProjectComponent
          title="AIR PIO COVID-19 DASHBOARD APP"
          content='AIR-PIO aim to solve the air pollution problem around
          Yangon. By Visualization, we describe "Air Pollution"
          information before and during COVID-19.'
          url="https://air-pio.netlify.app"
          imageOne={AIRPIO}
          imageTwo={airpiobh}
          imageThree={airpiocp}
          imageFour={airpiohr}
          imageFive={airpiotr}
        />
        <ProjectComponent
          title="BEAKBOOK WEB APP"
          content="Beakbook Limited is an Imperial College London spin-out
          focusing on poultry tech. We are developing data
          analytic tools and robust hardware to lower feed bills
          and support animal welfare."
          url="https://dev.dabp7j8blglx3.amplifyapp.com"
          imageOne={beakbookhp}
          imageTwo={beakbookab}
          imageThree={beakbookbt}
          imageFour={BEAKBOOK}
        />
      </Row>
    );
  }
}
