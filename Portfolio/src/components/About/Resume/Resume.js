import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ marginLeft: "5px", padding: "20px"}}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{marginLeft: "125px"}}>
          <Card className="quote-card-view">
            <Card.Body>

                <p style={{ textAlign: "justify" }}>
                  Front-end proficiencies
                </p>
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> HTML
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> CSS
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Vue JS
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> React JS
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Angular JS
                  </li>
                </ul>
              <hr/>
              <p style={{ textAlign: "justify" }}>
                Backend proficiencies
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Express JS
                </li>
                <li className="about-activity">
                  <ImPointRight /> Python (Django)
                </li>
                <li className="about-activity">
                  <ImPointRight /> Node JS
                </li>
                <li className="about-activity">
                  <ImPointRight /> PyTorch
                </li>
                <li className="about-activity">
                  <ImPointRight /> Go
                </li>
              </ul>


            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
