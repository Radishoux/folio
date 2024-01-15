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
              At <b className="purple">CEVA</b>, <br/>
              I played a pivotal role as a <b className="purple">Full-stack Developer</b>, <br/>
              where I initially started building a <b className="purple">Flutter</b> application to enhance container logistics monitoring.<br/><br/>
              I ended up evolving to a more <b className="purple">full-stack/devops/backend </b> position.<br/>
              Discovering myself a passion for <b className="purple">microservices architectures </b> and <b className="purple"> cloud computing</b>.<br/><br/>
              Using powerful modern technologies such as <b className="purple">AWS, Docker, Kubernetes, Node.js, Angular, Flutter, Mongo</b> and many more.<br/><br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <a href="https://en.wikipedia.org/wiki/CEVA_Logistics">
                <img src={logo} className="img_fluid" alt="Ceva" height={"300px"}/>
              </a>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Ceva;
