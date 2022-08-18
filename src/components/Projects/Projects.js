import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Tic.png";
import emotion from "../../Assets/Projects/facial.jpg";
import library from "../../Assets/Projects/library.jpg";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                    </Col> */}

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Bits-0f-C0de"
                            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                            ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                            demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col> */}

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
                            ghLink="https://github.com/Dhalisuman001/Tic-Tac-Tow-game---Python"

                        />
                    </Col>

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Ai For Social Good"
                            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                            ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                        // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col> */}

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                        // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                        // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;