import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I’m <b className="purple">Vikas Kumar</b>, a
              <b className="purple"> Full Stack Developer</b> and a
              <b className="purple"> B.Tech graduate in Mechatronics Engineering</b>{" "}
              from
              <b className="red">
                {" "}
                Indian Institute of Information Technology Bhagalpur
              </b>
              .
              <br />
              <br />

              I am passionate about
              <b className="purple"> Web Development</b> and
              <b className="purple"> Software Engineering</b>, with a strong
              interest in building responsive, user-friendly, and scalable web
              applications.
              <br />
              <br />

              I have gained practical industry experience as a
              <b className="purple">
                {" "}
                Full Stack Developer Intern at CyberWarFare Labs
              </b>
              , where I worked on real-world web applications, REST APIs,
              responsive UI components, API integration, and
              <b className="purple">
                {" "}
                Docker, Kubernetes, Linux, and Postman
              </b>
              .
              <br />
              <br />

              My core technical skills include
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js, Node.js, Express.js,
                  MongoDB, PostgreSQL, REST APIs, Tailwind CSS, Docker, and
                  Kubernetes
                </b>
              </i>
              .
              <br />
              <br />

              I enjoy solving challenging problems and have a strong
              foundation in
              <i>
                <b className="purple">
                  {" "}
                  Data Structures & Algorithms, Problem Solving, Object-Oriented
                  Programming, Operating Systems, Computer Networks, and DBMS
                </b>
              </i>
              .
              <br />
              <br />

              I love building practical projects and exploring new
              technologies. Some of my projects include
              <b className="red"> QuickStay</b>,
              <b className="red"> SupportAgentAI</b>, and other
              full-stack applications.
              <br />
              <br />

              Currently, I am focused on growing as a
              <i>
                <b className="purple"> Full Stack Developer</b>
              </i>
              , improving my
              <i>
                <b className="purple"> problem-solving skills</b>
              </i>
              , and building reliable software that solves real-world
              problems.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="Vikas Kumar avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;