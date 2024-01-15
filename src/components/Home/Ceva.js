import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/ceva.png";
import Tilt from "react-parallax-tilt";

function Ceva() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I fell in love with optimisation and now it's pretty much all i think about
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React, Javascript and Typescript. </b>
              </i>
              <br />
              I like reworking old Techs to turn them into
              <i>
                <b className="purple"> Modern New Web Technologies and Products </b>
              </i>
              <br />
              <br />
              I love developing optimised products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Electron.js</b>
              </i>
              <br />
              <br />
              feel free to
              <i>
                <b className="purple"> Contact me </b>
              </i>
              via :
              <br />
              <br />
              phone : +336 49 38 10 75
              <br />
              email : rudy.quinternet@gmail.com
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={logo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Ceva;
