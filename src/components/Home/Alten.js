import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/ALTEN-Logo.wine.png";
import Tilt from "react-parallax-tilt";

function Alten({ lang }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              {lang === "en" ? (
                <>
                  At <b className="purple">Alten</b>, <br />
                  I worked as a <b className="purple">Software Engineer</b> on a project sold to the Hospital of Nice, <br />
                  developing a system for <b className="purple">Virtual Patients</b> using <b className="purple">AI</b>. <br /><br />
                  The backend was built with <b className="purple">Node.js</b> and <b className="purple">TypeScript</b>, <br />
                  the database was hosted via <b className="purple">MongoDB Atlas</b>, <br />
                  and the frontend with <b className="purple">React</b>. We used <b className="purple">GitHub Actions</b> for CI/CD <br />
                  and deployed on <b className="purple">AWS</b>. <br /><br />
                  The AI, leveraging <b className="purple">GPT</b> and <b className="purple">Mistral</b>, generated patient images, <br />
                  sounds, and videos to help doctors train. <br />
                  We also developed an assistant to analyze medical remote meetings, <br />
                  highlight key points, and summarize them to assist doctors.<br /><br />
                </>
              ) : (
                <>
                  Chez <b className="purple">Alten</b>, <br />
                  j'ai travaillé en tant qu'<b className="purple">ingénieur logiciel</b> sur un projet vendu à l'hôpital de Nice, <br />
                  développant un système pour <b className="purple">patients virtuels</b> utilisant l'<b className="purple">IA</b>. <br /><br />
                  Le backend a été construit avec <b className="purple">Node.js</b> et <b className="purple">TypeScript</b>, <br />
                  la base de données était hébergée via <b className="purple">MongoDB Atlas</b>, <br />
                  et le frontend avec <b className="purple">React</b>. Nous avons utilisé <b className="purple">GitHub Actions</b> pour le CI/CD <br />
                  et déployé sur <b className="purple">AWS</b>. <br /><br />
                  L'IA, utilisant <b className="purple">GPT</b> et <b className="purple">Mistral</b>, générait des images de patients, <br />
                  des sons et des vidéos pour aider les médecins à s'entraîner. <br />
                  Nous avons également développé un assistant pour analyser les réunions médicales à distance, <br />
                  mettre en évidence les points clés et les résumer pour aider les médecins.<br /><br />
                </>
              )}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <a href="https://en.wikipedia.org/wiki/ALTEN">
                <img src={logo} className="img_fluid" alt="Alten" style={{ maxHeight: "350px", height: "350px" }} />
              </a>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Alten;
