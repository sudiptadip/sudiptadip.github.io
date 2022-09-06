import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sudipta Bhattacharjee</span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            Learning Web Development in Masai School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photoshop
            </li>
            <li className="about-activity">
              <ImPointRight /> Video editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
