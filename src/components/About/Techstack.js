import { SiCplusplus, SiTypescript, SiNodedotjs, SiElectron, SiAmazonaws, SiAngular, SiFlutter } from "react-icons/si";
import { DiReact, DiMongodb, DiGit } from "react-icons/di";
import { Row, Col } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiCplusplus />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiTypescript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiNodedotjs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiElectron />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiAmazonaws />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiAngular />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <SiFlutter />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;