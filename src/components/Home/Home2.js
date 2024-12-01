import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2({ lang }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              {lang === "en" ? (
                <>
                  I fell in love with optimisation at 18 and now it's pretty much all I think about.
                  <br />I am fluent in classics like
                  <b className="purple"> React, Javascript and Typescript. </b>
                  <br />
                  I like reworking old Techs to turn them into
                  <b className="purple"> Modern Web Technologies </b> and <b className="purple"> Products </b>
                  <br />
                  <br />
                  I love developing optimised products and working with <b className="purple"> Modern technologies </b>
                  <br />
                  such as: <b className="purple"> React.js, Angular, AWS, Mongo...</b>
                  <br />
                  <br />
                  Feel free to <b className="purple"> Contact me </b> via:
                  <br />
                  <br />
                  <b className="purple">phone</b>: +336 49 38 10 75
                  <br />
                  <b className="purple">email</b>: rudy.quinternet@gmail.com
                </>
              ) : (
                <>
                  Je suis tombé amoureux de l'optimisation à 18 ans et maintenant c'est à peu près tout ce à quoi je pense.
                  <br />Je maîtrise des classiques comme
                  <b className="purple"> React, Javascript et Typescript. </b>
                  <br />
                  J'aime retravailler les anciennes technologies pour les transformer en
                  <b className="purple"> Technologies Web Modernes </b> et <b className="purple"> Produits </b>
                  <br />
                  <br />
                  J'adore développer des produits optimisés et travailler avec <b className="purple"> des technologies modernes </b>
                  <br />
                  telles que: <b className="purple"> React.js, Angular, AWS, Mongo...</b>
                  <br />
                  <br />
                  N'hésitez pas à <b className="purple"> me contacter </b> via:
                  <br />
                  <br />
                  <b className="purple">téléphone</b>: +336 49 38 10 75
                  <br />
                  <b className="purple">email</b>: rudy.quinternet@gmail.com
                </>
              )}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
