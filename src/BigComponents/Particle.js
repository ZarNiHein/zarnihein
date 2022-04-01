import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Particle extends Component {
  render() {
    return (
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
    );
  }
}
