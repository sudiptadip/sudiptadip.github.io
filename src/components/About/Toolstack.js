import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGithub,
} from "react-icons/si"; // FiCodesandbox
import {FiCodesandbox} from 'react-icons/fi'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize: "30%"}} >VS CODE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize: "30%"}} >POSTMAN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{fontSize: "30%"}} >GITHUB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      <p style={{fontSize: "30%"}} >HEROKU</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FiCodesandbox />
      <p style={{fontSize: "30%"}} >POSTMAN</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
