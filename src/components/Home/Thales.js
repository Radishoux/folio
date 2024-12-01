import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/thales.png";
import Tilt from "react-parallax-tilt";

function Thales({ lang }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              {lang === "en" ? (
                <>
                  At <b className="purple">Thales</b>, <br />
                  I collaborated with the <b className="purple">NCOP</b> team for multiple clients like notably <b className="purple">NATO</b>. <br /><br />
                  My role mainly involved developing military software, leveraging my expertise in <b className="purple">Node.js, Typescript, Angular</b>, and IT in general. <br /><br />
                  Working alongside a team of <b className="purple">agile</b> highly <b className="purple">skilled</b> senior colleagues, I contributed to creating <b className="purple">resilient</b> and <b className="purple">efficient</b> code for this high-profile project. <br /><br />
                  This experience not only honed my technical skills but also enhanced my understanding of <b className="purple">asynchronous, functional, hexagonal architectures, CI/CD, scrum </b>
                  and multiple design patterns used for developing robust applications in a dynamic and modern environment.
                </>
              ) : (
                <>
                  Chez <b className="purple">Thales</b>, <br />
                  j'ai collaboré avec l'équipe <b className="purple">NCOP</b> pour plusieurs clients, notamment <b className="purple">l'OTAN</b>. <br /><br />
                  Mon rôle consistait principalement à développer des logiciels militaires, en tirant parti de mon expertise en <b className="purple">Node.js, Typescript, Angular</b> et en informatique en général. <br /><br />
                  En travaillant aux côtés d'une équipe de collègues seniors <b className="purple">agiles</b> et hautement <b className="purple">compétents</b>, j'ai contribué à créer un code <b className="purple">résilient</b> et <b className="purple">efficace</b> pour ce projet de haut niveau. <br /><br />
                  Cette expérience a non seulement affiné mes compétences techniques, mais a également amélioré ma compréhension des <b className="purple">architectures asynchrones, fonctionnelles, hexagonales, CI/CD, scrum </b>
                  et de multiples modèles de conception utilisés pour développer des applications robustes dans un environnement dynamique et moderne.
                </>
              )}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <a href="https://en.wikipedia.org/wiki/Thales_Group">
                <img src={logo} className="img_fluid" alt="Thales" height={"300px"} />
              </a>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Thales;