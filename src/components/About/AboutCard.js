import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krupali Bhagwat </span>
            from <span className="purple"> PUNE, India.</span>
            <br />
            I am currently employed as a software developer at LTIMINDTREE.
            <br />
            I have completed Integrated B.E. in CIVIL at  Government College of Engineering, Chandrapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Recompiling myself to find the best version, one update at a time !"{" "}
          </p>
          <footer className="blockquote-footer">Krupali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
