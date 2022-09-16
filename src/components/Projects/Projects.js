import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Decoding-Active-Noise-Cancellation-1_2.jpg?v=1648622557'
              isBlog={false}
              title="Clone of boAt website"
              description="BoAt is an India-based consumer electronics brand established in 2015 that markets earphones and headphones.  stereos I build this website using react. in this website I create only Front End part Developed this website in one week"
              ghLink="https://github.com/sudiptadip/sudipta-boat-lush-lace-9782"
              demoLink="https://dapper-melomakarona-2fdcba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://apkdone.com/wp-content/uploads/2021/08/Cricbuzz-poster.jpg'
              isBlog={false}
              title="Clone of Cricbuzz website"
              description="Cricbuzz is an Indian cricket news website owned by Times Internet.Developed along with a team of 4 member In a week. 
              My task in this collaborative project was to recent cricket news show on this website, Video and ranking part. We buid this website using javascript. "
              ghLink="https://github.com/VijaySingh8650/cricbuzz"
              demoLink="https://luxury-douhua-2f73cb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://expedia-tawny.vercel.app/static/media/Top-app-banner.9babc985b450bfc9631b.webp"
              isBlog={false}
              title="Clone of Expedia website"
              description="Expedia Inc. is an online travel agency owned by Expedia Group, an American online travel shopping company based in Seattle My task in this collaborative project was to Sign in and Sign up pages and more travel options We build this website using React."
              ghLink="https://github.com/manojattri181/oval-wall-8886"
              demoLink="https://expedia-tawny.vercel.app/?city="         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/g2Lg716D/imbaygdhgefsdjkflaskdjdddddddddddd.png"
              isBlog={false}
              title="E Commerce Website"
              description="This is ecommerce shopping website for women. This websie i create within 3 week using react.js and chakra ui. Some functionality of this website are we can cart the produt and buy the product and in this website also has admin page their we can edit any product delite product and we can add any product. I create only frontend part of this websie"
              ghLink="https://github.com/sudiptadip/Full-ecommerce.git"
              demoLink="https://ladies-special-ecommerce.vercel.app/"         
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
