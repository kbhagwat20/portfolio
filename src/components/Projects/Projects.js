import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/OIP.jpg";
// import emotion from "../../Assets/Projects/OIP (1).jpg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/OIP (1).jpg";
import resume from "../../Assets/Projects/download (1).jpg";
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







          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description=" Built afull-stack exercise tracker CRUD application using the MERN (MongoDB,Express,React,Node.js)stack.
 • Theapplication allows users to create, read, update, and delete exercises, with data stored in a MongoDB database
 hosted onMongoDBAtlas.."
              ghLink="https://github.com/kbhagwat20"
              demoLink="https://github.com/kbhagwat20"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chatbot"
              description="Using 'Natural Launguage Processing' for the getting relaLeveraging Natural Language Processing to enhance chatbot responses by identifying related words and providing insightful statisticsate words and stats in the chatbot"
              ghLink="https://github.com/kbhagwat20"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />



          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A personal portfolio website built with HTML, CSS, and React to showcase projects, skills, and experience in a clean and interactive interface. Designed for responsive viewing, with smooth transitions and dynamic components to enhance user engagement"
              ghLink="https://github.com/kbhagwat20"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />



          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
