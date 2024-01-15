import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowershell,
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { FiChrome } from "react-icons/fi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FiChrome />
      </Col>
    </Row>
  );
}

export default Toolstack;
