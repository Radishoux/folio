import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCustomerService } from "react-icons/ai";
import { MdSkateboarding } from "react-icons/md";
import { BiGame } from "react-icons/bi";

function AboutCard({ lang }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {lang === "en" ? (
              <>
                I live in <span className="purple"> 75015, Paris, France.</span>
                <br />
                But I am totally open to <span className="purple">relocation</span> or <span className="purple">remote</span> opportunities.
                <br />
                I am a great dev with a <span className="purple">brilliant</span> future (says my mom).
                <br />
                <br />
                Some other activities that I love to do!
              </>
            ) : (
              <>
                J'habite à <span className="purple"> Paris, France, 75015.</span>
                <br />
                Mais je suis totalement ouvert à des opportunités de <span className="purple">relocation</span> ou de <span className="purple">télétravail</span>.
                <br />
                Je suis un excellent développeur avec un avenir <span className="purple">brillant</span> (dixit ma mère).
                <br />
                <br />
                Voici quelques autres activités que j'adore faire !
              </>
            )}
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCustomerService size={"35px"} /> {lang === "en" ? "Music" : "Musique"}
            </li>
            <li className="about-activity">
              <MdSkateboarding size={"35px"} /> {lang === "en" ? "Skateboard" : "Skateboard"}
            </li>
            <li className="about-activity">
              <BiGame size={"35px"} /> {lang === "en" ? "Video games" : "Jeux vidéo"}
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Just Do it !"{" "}
          </p>
          <br />
          <footer className="blockquote-footer">Shia Labeouf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;