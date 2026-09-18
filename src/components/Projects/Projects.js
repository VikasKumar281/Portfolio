import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DevTinder from "../../Assets/Projects/DevTinder.png";
import quickstay from "../../Assets/Projects/QuickStay.png";
import MyMart from "../../Assets/Projects/MyMart.png";
import ANNModel from "../../Assets/Projects/ANN model.png";
import PitchVisualizer from "../../Assets/Projects/Pitch Visualizer.png";
import EmpathyEngine from "../../Assets/Projects/Empathy Engine.png";
import supportAgentAI from "../../Assets/Projects/SupportAgentAI.png";
import cognifyAI from "../../Assets/Projects/CognifyAI.png";
import neuroSeg from "../../Assets/Projects/NeuroSeg.png";
import airflowDataPipeline from "../../Assets/Projects/AirflowDataPipeline.png";
import yelpApiETL from "../../Assets/Projects/YelpApiETL.png";
import ANNModel2 from "../../Assets/Projects/ANNModel2.png";

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
              imgPath={supportAgentAI}
              isBlog={false}
              title="SupportAgentAI"
              description="SupportAgentAI is an end-to-end customer-support automation system built with Python that classifies customer intents, retrieves relevant historical support interactions using TF-IDF similarity, detects high-risk requests, and decides whether a query should be auto-handled or escalated for human review. The system uses TF-IDF and Logistic Regression for intent classification, leakage-free historical retrieval, and a rule-based risk escalation pipeline with transparent evaluation and failure analysis."
              ghLink="https://github.com/VikasKumar281/SupportAgentAI"
              demoLink={null}
            />
          </Col>
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
              imgPath={cognifyAI}
              isBlog={false}
              title="CognifyAI"
              description="CognifyAI is an intelligent RAG and Speech AI assistant built with Python and Streamlit that enables users to interact with documents and audio through semantic search, transcription, and contextual responses. It combines document ingestion with chunking and embeddings, hybrid semantic and keyword retrieval, Whisper-based speech processing, conversation memory, and Supabase for persistent storage, with Docker support for reproducible deployment."
              ghLink="https://github.com/VikasKumar281/CognifyAI"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuroSeg}
              isBlog={false}
              title="NeuroSeg"
              description="NeuroSeg is a deep learning-based medical image segmentation project designed to automatically segment whole tumors from brain MRI scans using the BraTS 2021 dataset. The model combines an Attention U-Net architecture with Residual Connections and Squeeze-and-Excitation blocks to improve feature extraction and tumor localization, with complete training, evaluation, and prediction pipelines focused on Dice and IoU performance."
              ghLink="https://github.com/VikasKumar281/NeuroSeg"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airflowDataPipeline}
              isBlog={false}
              title="Airflow Data Pipeline"
              description="Airflow Data Pipeline is an end-to-end data engineering workflow built with Apache Airflow, Amazon S3, Amazon Redshift, Python, and SQL. The pipeline orchestrates raw song and event data ingestion from S3, stages the data in Redshift, transforms it into fact and dimension tables, and performs automated data-quality validation using custom Airflow operators, task dependencies, scheduling, retries, and reusable SQL query management."
              ghLink="https://github.com/VikasKumar281/Airflow_Data_Pipeline"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yelpApiETL}
              isBlog={false}
              title="Yelp API ETL"
              description="Yelp API ETL is a Python-based data engineering pipeline that extracts business information from the Yelp Fusion API, transforms nested JSON responses into structured records, and loads the processed data into PostgreSQL. The application supports command-line search by term, location, and price, automatically creates the required database schema and table, and uses PostgreSQL upsert logic to insert new businesses or update existing records without creating duplicates."
              ghLink="https://github.com/VikasKumar281/Yelp_API_ETL"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevTinder}
              isBlog={false}
              title="DevTinder"
              description="DevTinder is a full-stack developer networking platform built with Vite + React.js, Tailwind CSS, and DaisyUI, backend by Node.js, Express, and MongoDB. It features secure authentication, protected routes, and global state management using Redux Toolkit. Users can create profiles, explore developer feeds, manage connection requests, and chat in real time using Socket.IO"
              // demoLink="https://tinderfordev.com/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ANNModel2}
              isBlog={false}
              title="ANN-Based Deformation Mechanism Maps"
              description="A materials informatics project that uses Artificial Neural Networks to model hot-deformation behavior and generate Deformation Mechanism Maps for 2219 Aluminium and 2219 Al–0.1 wt% Ag alloys. The workflow uses strain, strain rate, and deformation temperature to predict flow stress, evaluates strain-rate sensitivity, and combines power dissipation efficiency with instability analysis to identify safe and unsafe processing regions, deformation mechanisms, and favorable hot-working windows."
              ghLink="https://github.com/VikasKumar281/Generation-of-Deformation-Mechanism-Maps-of-2219-Al-and-2219-Al-0.1-wt-Ag-Alloys-using-ANN"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PitchVisualizer}
              isBlog={false}
              title="Pitch Visualizer"
              description="This project builds an AI-powered system to transform raw startup ideas into structured and investor-ready pitch content. It processes user input and generates key components such as problem statements, solutions, target audience, and value propositions using natural language processing and prompt engineering. The system helps users visualize and refine their ideas into clear, organized, and presentation-ready insights."              
              ghLink="https://github.com/VikasKumar281/Pitch-Visualizer"
              demoLink="https://pitch-visualizer-c4zv.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmpathyEngine}
              isBlog={false}
              title="Empathy Engine"
              description="This project builds an AI-based emotion detection system to classify human emotions from textual input. It leverages transformer-based models to understand context and identify sentiments such as happiness, sadness, anger, and fear with high accuracy. The system enables more empathetic and human-like interactions, making it useful for chatbots, customer support, and feedback analysis applications."
              ghLink="https://github.com/VikasKumar281/Empathy-Engine"
              demoLink="https://empathy-engine-cgyl.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
