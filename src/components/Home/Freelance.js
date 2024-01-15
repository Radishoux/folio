import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/Epitech.webp";
import Tilt from "react-parallax-tilt";

function Freelance() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
            As a <b className="purple">Freelance</b>, <br/>
            I have worked on multiple projects for a lot of clients, <br/>
            ranging from local businesses like <b className="purple">restaurants</b> and <b className="purple">startups</b> to <b className="purple"> big companies </b> and even <b className="purple">Schools</b>.<br/><br/>
            I have worked on a lot of different projects, <br/> and also notably ended up teaching <b className="purple">Web Development</b> and good practices to <b className="purple">students</b> at <b className="purple">Epitech</b>.<br/><br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <a href="https://en.wikipedia.org/wiki/Epitech">
              <img src={logo} className="img_fluid" alt="Epitech" height={"300px"} />
              </a>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Freelance;
