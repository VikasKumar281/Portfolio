import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DevTinder from "../../Assets/Projects/DevTinder.png";
import quickstay from "../../Assets/Projects/QuickStay.png";
import MyMart from "../../Assets/Projects/MyMart.png";
import ANNModel from "../../Assets/Projects/ANN model.png";

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
              imgPath={quickstay} 
              isBlog={false}
              title="QuickStay"
              description="QuickStay is a full-stack hotel booking platform developed using React.js for the frontend and Node.js, Express.js, and MongoDB for the backend, with Tailwind CSS for a modern and responsive user interface. The platform enables users to search and filter hotels based on location and availability, view detailed hotel information including pricing and amenities, and securely book rooms in real time."
              ghLink="https://github.com/VikasKumar281/QuickStay"
              demoLink="https://quickstay-one-inky.vercel.app/"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyMart}
              isBlog={false}
              title="MyMart"
              description="MyMart is a full-stack e-commerce web application built with React.js and Tailwind CSS on the frontend, and Node.js, Express, and MongoDB on the backend. It features secure user and seller authentication, product management, and role-based dashboards for sellers. Users can browse products, manage carts, add delivery addresses, and place orders with persistent data storage. It supports user and seller authentication."
              ghLink="https://github.com/VikasKumar281/MyMart"
              demoLink="https://greencart-gs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevTinder}
              isBlog={false}
              title="DevTinder"
              description="DevTinder is a full-stack developer networking platform built with Vite + React.js, Tailwind CSS, and DaisyUI, backend by Node.js, Express, and MongoDB. It features secure authentication, protected routes, and global state management using Redux Toolkit. Users can create profiles, explore developer feeds, manage connection requests, and chat in real time using Socket.IO"
              demoLink="https://tinderfordev.com/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ANNModel}
              isBlog={false}
              title="FlowStress-Prediction-ANN-Model"
              description="This project builds a deep learning-based Artificial Neural Network (ANN) to predict Flow Stress using engineered features from Strain, Strain Rate, and Temperature. The model automatically selects the best architecture using neuron-search optimization and achieves high accuracy through MinMax scaling, early stopping, and extensive evaluation."
              ghLink="https://github.com/VikasKumar281/FlowStress-Prediction-ANN-Model"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
