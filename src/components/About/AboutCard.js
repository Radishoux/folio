import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCustomerService } from "react-icons/ai";
import { MdSkateboarding } from "react-icons/md";
import { BiGame } from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I live in <span className="purple"> 75015, Paris, France.</span>
            <br />I am a great dev with a <span className="purple">brilliant</span> future (says my mom).
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCustomerService size={"35px"}/> Music
            </li>
            <li className="about-activity">
              <MdSkateboarding size={"35px"}/> Skateboard
            </li>
            <li className="about-activity">
              <BiGame size={"35px"}/> Video games
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
