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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m <b className="purple">Vikas Kumar</b>, a <b className="purple">B.Tech
              Mechatronics Engineering</b> student at
              <b className="red"> Indian Institute of Information Technology Bhagalpur</b>, with a
              strong interest in
              <b className="purple"> Web Development </b> and
              <b className="purple"> Software Engineering</b>.
              <br />
              <br />
              I enjoy building responsive and user-friendly web applications
              and continuously learning modern technologies.
              <br />
              <br />
              I am skilled in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, HTML, CSS, Tailwind CSS, Node.js,
                  Express.js, MongoDB{" "}
                </b>
              </i>
              .
              <br />
              <br />
              I also have a good foundation in
              <i>
                <b className="purple">
                  {" "}
                  Data Structures & Algorithms, Problem Solving, Machine
                  Learning fundamentals{" "}
                </b>
              </i>
              and enjoy applying logical thinking to solve real-world problems.
              <br />
              <br />
              I love working on real-world projects and have built applications
              like
              <b className="red"> QuickStay</b>,
              <b className="red"> DevTinder</b>, and
              <b className="red"> MyMart</b>.
              <br />
              <br />
              Currently, I am focused on improving my skills in
              <i>
                <b className="purple"> React.js</b>,
                <b className="purple"> Full-Stack Development</b>, and
                <b className="purple"> Problem Solving</b>
              </i>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
