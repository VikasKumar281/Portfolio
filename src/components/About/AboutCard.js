import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Vikas Kumar</span> from{" "}
            <span className="purple">Kanpur, Uttar Pradesh, India</span>.
            <br />

            I recently completed my{" "}
            <span className="purple">
              B.Tech in Mechatronics Engineering
            </span>{" "}
            from{" "}
            <span className="red">
              Indian Institute of Information Technology Bhagalpur
            </span>
            .
            <br />
            <br />

            I am passionate about{" "}
            <span className="purple">Full Stack Web Development</span> and
            enjoy building responsive, user-friendly, and scalable web
            applications using modern technologies.
            <br />
            <br />

            I have gained practical industry experience as a{" "}
            <span className="purple">
              Full Stack Developer Intern at CyberWarFare Labs
            </span>
            , where I worked on real-world web applications, backend REST APIs,
            UI improvements, API testing, and development environments using
            modern tools and technologies.
            <br />
            <br />

            I have hands-on experience with{" "}
            <span className="purple">
              React.js, JavaScript, Node.js, Express.js, MongoDB, REST APIs,
              HTML, CSS, and Tailwind CSS
            </span>
            . I also have practical experience with{" "}
            <span className="purple">
              Git, Docker, Kubernetes, Linux, and Postman
            </span>{" "}
            and actively practice{" "}
            <span className="purple">
              Data Structures & Algorithms and Problem Solving
            </span>
            .
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA & Coding Problems 💡
            </li>

            <li className="about-activity">
              <ImPointRight /> Building Full Stack Web Projects 🚀
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning & Exploring New Technologies 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning every day and building things that create real impact."
          </p>

          <footer className="blockquote-footer">Vikas Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;