import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vikas Kumar</span> from{" "}
            <span className="purple">Kanpur, Uttar Pradesh, India</span>.
            <br />
            I am currently pursuing{" "}
            <span className="purple">B.Tech in Mechatronics Engineering</span> at{" "}
            <span className="red">
              Indian Institute of Information Technology Bhagalpur
            </span>
            .
            <br />
            <br />
            I am passionate about{" "}
            <span className="purple">Web Development</span> and enjoy building
            responsive and user-friendly web applications using modern
            technologies.
            <br />
            <br />
            I have hands-on experience with{" "}
            <span className="purple">
              React.js, Node.js, Express.js, MongoDB, HTML, CSS, and Tailwind CSS
            </span>{" "}
            and I actively practice{" "}
            <span className="purple">
              Data Structures & Algorithms 
            </span>
             {" "} and {" "} 
            <span className="purple">
               Problem Solving
            </span>
            .
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA & Coding Problems 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Web Projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 📚
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
