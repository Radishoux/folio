import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import logoReact from "../../Assets/logo-react.png";
import logoElectron from "../../Assets/logo-electron.png";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function About({lang}) {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

      <h1 className="project-heading">
          {lang === "en" ? "Professional" : "Compétences"}{" "}
          <strong className="purple">
            {lang === "en" ? "Skillset" : "Professionnelles"}
          </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">
            {lang === "en" ? "Tools" : "Outils"}
          </strong>{" "}
          {lang === "en" ? "I use daily" : "que j'utilise quotidiennement"}
        </h1>

        <Toolstack />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h2>
              <img alt="" src={logoReact} className="img-fluid logo" />
              {lang === "en" ? "FOLLOW ME ON" : "SUIVEZ-MOI SUR"}
              <img alt="" src={logoElectron} className="img-fluid logoE" />
            </h2>
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
