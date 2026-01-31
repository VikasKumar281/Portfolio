import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function Github() {
  const [fontSize, setFontSize] = useState(
    window.innerWidth <= 768 ? 8 : 16
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setFontSize(10);
      } 
      else {
        setFontSize(16);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []
  );

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "30px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 className="project-heading pb-4">
        Days I <strong className="purple">Code</strong>
      </h1>

      {/* GitHub Contribution Calendar */}
     <GitHubCalendar
      username="VikasKumar281"
      blockSize={20}
      blockMargin={5}
      color="#119a2c"
      fontSize={fontSize}
     />

      {/* Snake Animation */}
      <div style={{ marginTop: "50px", width: "100%" }}>
        <h2 className="project-heading">
          Contribution <strong className="purple">Snake</strong>
        </h2>

        <img
          src="https://raw.githubusercontent.com/Vikaskumar281/Vikaskumar281/output/github-contribution-grid-snake.svg"
          alt="GitHub Contribution Snake"
          style={{
            width: "100%",
            maxWidth: "1800px",
            marginTop: "10px",
          }}
        />
      </div>

    </Row>
  );
}

export default Github;

