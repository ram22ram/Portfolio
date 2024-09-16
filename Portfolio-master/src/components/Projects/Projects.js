import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import admin from "../../Assets/Projects/admin_dashboard.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


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
              title="SHEYBUS-UDEMY"
              description="Sheybus is a bus ticket management app that lets users view and book available seats or cancel tickets. Admins can add, edit, or delete bus schedules and timings. With a user-friendly interface and real-time updates, Sheybus simplifies travel planning and ticket management for everyone involved."
              ghLink="https://github.com/ram22ram/SHEYBUS-UDEMY.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="UI-Design"
              description="A collection of thoughtfully crafted user interfaces emphasizing intuitive navigation, clean aesthetics, and user-centric functionality. Each design is created to enhance the user experience through thoughtful layout, consistent styling, and responsive interactions."
              ghLink="https://github.com/ram22ram/UIDesign.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ToDo App"
              description="React Project - ToDo: A dynamic task management application built with React. It allows users to add, view, edit, and delete tasks efficiently. Features include a clean and responsive UI, local storage for persistent data, and intuitive task organization, helping users stay productive and manage their to-dos effortlessly."
              ghLink="https://github.com/ram22ram/react-project-todo.git"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Clone Netflix Project"
              description="React Netflix Project: A Netflix-inspired media streaming app built with React. Users can browse and filter through a vast collection of movies and TV shows, view detailed information, and enjoy a seamless and interactive experience. Features include responsive design, dynamic content fetching, and a polished UI reminiscent of Netflix."
              ghLink="https://github.com/ram22ram/react_netflix_project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin_dashboard"
              description="Admin Dashboard: A comprehensive admin panel for managing and monitoring key metrics. Features include user management, real-time data visualization, and configurable settings. The dashboard provides intuitive controls for overseeing operations, generating reports, and managing various aspects of the system, all within a sleek and user-friendly interface."
              ghLink="https://github.com/ram22ram/Admin_dashboard.github.io.git"
               demoLink="https://ram22ram.github.io/Admin_dashboard.github.io/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
