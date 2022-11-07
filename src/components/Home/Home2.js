import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import logoReact from "../../Assets/logo-react.png";
import logoElectron from "../../Assets/logo-electron.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with optimisation and now it's pretty much all i think about
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React, Javascript and Typescript. </b>
              </i>
              <br />
              <br />
              I like reworking old Techs to turn them into
              <i>
                <b className="purple"> Modern New Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing optimised products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
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
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h2><img src={logoReact} className="img-fluid logo"/>FOLLOW ME ON<img src={logoElectron} className="img-fluid logoE"/></h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Radishoux"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rudy-quinternet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/radishoux/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
