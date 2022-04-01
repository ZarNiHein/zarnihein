import "./App.css";
import { Container } from "react-bootstrap";
import { Component } from "react";
import HomeNavbar from "./BigComponents/HomeNav";
import Projects from "./BigComponents/Projects";
import Contact from "./BigComponents/Contact";
import PageFooter from "./BigComponents/PageFooter";
import Intro from "./BigComponents/Intro";
import Education from "./BigComponents/Education";
import Work from "./BigComponents/Work";
import Particle from "./BigComponents/Particle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particle />
        <HomeNavbar />
        <Container className="titleStyle pt-5">
          <Intro />
          <Education />
          <Work />
          <Projects />
          <Contact />
        </Container>
        <PageFooter />
      </div>
    );
  }
}

export default App;
