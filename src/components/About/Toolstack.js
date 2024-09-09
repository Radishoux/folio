import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowershell,
  SiVisualstudiocode,
  SiGithub,
  SiOpenai,
  SiGooglechrome
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://en.wikipedia.org/wiki/PowerShell" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiPowershell />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiOpenai />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiGithub />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiGooglechrome />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;