import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/thales.png";
import Tilt from "react-parallax-tilt";

function Levels() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
            At <b className="purple">Thales</b>, <br/>
            I collaborated with the <b className="purple">NCOP</b> team for multiple clients like notably <b className="purple">NATO</b>. <br /><br />
            My role mainly involved developing military software, leveraging my expertise in <b className="purple">Node.js, Typescript, Angular</b>, and IT in general. <br /><br />
            Working alongside a team of <b className="purple">agile</b> highly <b className="purple">skilled</b> senior colleagues, I contributed to creating <b className="purple">resilient</b> and <b className="purple">efficient</b> code for this high-profile project. <br /><br />
            This experience not only honed my technical skills but also enhanced my understanding of <b className="purple">asynchronous, functional, hexagonal architectures, CI/CD, scrum </b>
            and multiple design patterns used for developing robust applications in a dynamic and modern environment.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <a href="https://en.wikipedia.org/wiki/Thales_Group">
              <img src={logo} className="img_fluid" alt="Thales" height={"300px"}/>
            </a>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Levels;
