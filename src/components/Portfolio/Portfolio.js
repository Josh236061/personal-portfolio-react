import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./PortfolioCard";
import Particle from "../Particle";

function Portfolio() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Portfolio </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Personal Portfolio:Adv.CSS Build"
              description="A personal portfolio showcasing skills and talents to employers looking to fill a part-time or full-time position. "
              ghLink="https://github.com/Josh236061/personal-portfolio"
              demoLink="https://josh236061.github.io/personal-portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Ticketgurusss"
              description="At TicketGurusss, your favorite non-Guru Developers welcome ALL Users young and old, to enjoy a seamless experience searching for all of your favorite music events around your area, day or night, anytime you like!"
              ghLink="https://github.com/Josh236061/ticketgurusss"
              demoLink="https://josh236061.github.io/ticketgurusss/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Clothingurusss"
              description="Welcome to Clothing Gurusss! Here, we post the best clothing products from all our valued vendor members!"
              ghLink="https://github.com/Josh236061/clothingurusss"
              demoLink="https://frozen-ocean-07710.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Text Editor PWA"
              description="Building a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria."
              ghLink="https://github.com/Josh236061/text-editor-pwa"
              demoLink="https://desolate-coast-35303.herokuapp.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;
