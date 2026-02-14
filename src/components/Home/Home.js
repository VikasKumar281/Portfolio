import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_het9j6q",
        "template_e4el0dd",
        form.current,
        "_cMojtKjhtiYAjRP2"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          setLoading(false);
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
          setLoading(false);
        }
      );

    e.target.reset();
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vikas Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      {/* 🔥 CONTACT SECTION START */}
     <Container fluid className="contact-wrapper">
  <Row className="justify-content-center">
    <Col md={6} lg={5}>
      <Form ref={form} onSubmit={sendEmail} className="contact-card">
        <h2 className="text-center mb-4">Contact Me</h2>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Your Message"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </Form>
    </Col>
  </Row>
</Container>
      {/* 🔥 CONTACT SECTION END */}

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VikasKumar281"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vikas-kumar-586975256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;