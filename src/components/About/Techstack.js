import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJava,
  SiRedux
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{fontSize: "30%"}} >HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{fontSize: "30%"}} >CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: "30%"}} >NODE JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: "30%"}} >REACT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p style={{fontSize: "30%"}} >JAVA SCRIPT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
        <p style={{fontSize: "30%"}} >JAVA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{fontSize: "30%"}} >REDUX</p>
      </Col>
    </Row>
  );
}

export default Techstack;
