import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  AiFillStar,
} from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import Switch from "react-switch";


function NavBar({ lang, updateLanguage }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* <Nav.Item>
              <Nav.Link
                href="https://radishoux.github.io/projects"
                rel="noreferrer"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Radishoux/folio"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href={lang === "en" ? "https://s3.eu-west-3.amazonaws.com/rudyquinternet.com/Rudy_cv.pdf" : "https://s3.eu-west-3.amazonaws.com/rudyquinternet.com/cv_Rudy.pdf"}
                rel="noreferrer"
                target="_blank"
              >
                <FaRegFilePdf style={{ marginBottom: "2px" }} />
                {" "}
                CV/Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://calendar.app.google/vDrZT2Z288dW4tmN8"
                rel="noreferrer"
                target="_blank"
              >
                <FaCalendarCheck
                  style={{ marginBottom: "2px" }}
                />
                {" "}
                Calendar
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                EN
                {" "}
                <Switch
                  onChange={() => {
                    updateLanguage(lang === "en" ? "fr" : "en");
                  }}
                  checked={lang === "fr"}
                  offColor="#888"
                  onColor="#6a0dad"
                  uncheckedIcon={<div style={{}}>💂</div>}
                  checkedIcon={<div style={{}}>🥐</div>}
                />
                {" "}
                FR
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
