import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";


function Contact() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", marginLeft: "-5px;" }}>
                            <span>Contact</span>
                        </h1>
                        <ContactCard/>
                    </Col>

                </Row>

            </Container>
        </Container>
    );
}

export default Contact;
