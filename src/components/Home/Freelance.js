import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/Epitech.webp";
import Tilt from "react-parallax-tilt";

function Freelance({ lang }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              {lang === "en" ? (
                <>
                  As a <b className="purple">Freelance</b>, <br />
                  I have worked on multiple projects for a lot of clients, <br />
                  ranging from local businesses like <b className="purple">restaurants</b> and <b className="purple">startups</b> to <b className="purple">big companies</b>, <b className="purple">hospitals</b> and <b className="purple">schools</b>.<br /><br />
                  I have worked on a lot of different projects, <br /> and also notably ended up teaching <b className="purple">Web Development</b> and good practices to <b className="purple">engineering students</b>.<br /><br />
                </>
              ) : (
                <>
                  En tant que <b className="purple">Freelance</b>, <br />
                  j'ai travaillé sur de nombreux projets pour de nombreux clients, <br />
                  allant des entreprises locales comme des <b className="purple">restaurants</b> et des <b className="purple">startups</b> à des <b className="purple">grandes entreprises</b>, des <b className="purple">hôpitaux</b> et des <b className="purple">écoles</b>.<br /><br />
                  J'ai travaillé sur de nombreux projets différents, <br /> et j'ai également fini par enseigner le <b className="purple">développement web</b> et les bonnes pratiques aux <b className="purple">étudiants en ingénierie</b>.<br /><br />
                </>
              )}
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