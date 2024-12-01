import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Thales from "./Thales";
import Ceva from "./Ceva";
import Alten from "./Alten";
import Freelance from "./Freelance";
import Type from "./Type";

function Home({ lang }) {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {lang === "en" ? "Hi There!" : "Bonjour!"}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {lang === "en" ? "I Am" : "Je suis"}
                <strong className="main-name"> Rudy Quinternet</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type lang={lang} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 lang={lang} />

      <h1 className="project-heading">
        {lang === "en" ? "Main" : "Principales"}{" "}
        <strong className="purple">
          {lang === "en" ? "Experiences" : "Expériences"}
        </strong>
      </h1>
      <Alten lang={lang} />
      <Thales lang={lang} />
      <Ceva lang={lang} />
      <Freelance lang={lang} />
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}

export default Home;
