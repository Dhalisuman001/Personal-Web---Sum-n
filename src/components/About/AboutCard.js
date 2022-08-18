import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Suman Dhali </span>
            from <span className="purple"> West Bangal, India.</span>
            <br />
            Currently i'm pursuing Bachelor of Computer Application in Techno
            International Newtown.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games like Cricket and footbal.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love to build things that make a Revolution!"{" "}
          </p>
          <footer className="blockquote-footer">Sum@n</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
