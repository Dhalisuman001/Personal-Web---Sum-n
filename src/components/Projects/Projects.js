import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Tic.png";
import library from "../../Assets/Projects/library.jpg";
import chatify from "../../Assets/Projects/chitter-chatter.png";
import boxOffice from "../../Assets/Projects/box-office.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, styled component, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Dhalisuman001/chitter-chatter"
              demoLink="https://chitter-chatter-001.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boxOffice}
              isBlog={false}
              title="Box-office"
              description="Self made react based box-office website which shows movies and actrors. Tools i used react.js, styled-component, custom hooks  "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://dhalisuman001.github.io/box-office/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management"
              description="Self made library management software build with C on Visual Studio Code. This software store the tracks of available books, records of taken books, calculate the time direction and price "
              ghLink="https://github.com/Dhalisuman001/Library-Management---C"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tic-Tac-Tow"
              description="Self made  Tic-Tac-Tow game build with Python on Visual Studio Code. Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
              ghLink="https://github.com/Dhalisuman001/box-office"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
