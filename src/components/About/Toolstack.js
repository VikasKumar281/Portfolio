import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import GitHub from "../../Assets/TechIcons/github.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Vercel from "../../Assets/TechIcons/vercel.svg";
import Jupyter from "../../Assets/TechIcons/jupyter.svg";
import Colab from "../../Assets/TechIcons/googlecolab.svg";
import Render from "../../Assets/TechIcons/render.svg";
import Kaggle from "../../Assets/TechIcons/kaggle.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={GitHub} alt="GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Vercel} alt="Vercel" className="tech-icon-images" />
        <div className="tech-icons-text">Vercel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Jupyter} alt="Jupyter Notebook" className="tech-icon-images" />
        <div className="tech-icons-text">Jupyter</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Colab} alt="Google Colab" className="tech-icon-images" />
        <div className="tech-icons-text">Google Colab</div>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <img src={Render} alt="Render" className="tech-icon-images" />
        <div className="tech-icons-text">Render</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kaggle} alt="Kaggle" className="tech-icon-images" />
        <div className="tech-icons-text">Kaggle</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
