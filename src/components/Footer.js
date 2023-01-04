import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer align-content-center">
      <Row>
        <Col md="6" className="footer-body offset-3">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.stackoverflow.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaStackOverflow/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
