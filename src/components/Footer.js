import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3> Developed by Suman Dhali</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} Suman</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Dhalisuman001"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.twitter.com/dhalisuman26/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/suman-dhali-403115209"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instragram.com/dhali.suman01/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.facebook.com/SD705/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noreferrer noreferrer"

                            >
                                <AiFillFacebook />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;