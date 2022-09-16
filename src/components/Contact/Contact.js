import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import PhoneIcon from "@mui/icons-material/Phone";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place"; // FaPhone
import { FaPhone } from 'react-icons/fa'; // MdOutlineMailOutline
import { MdOutlineMailOutline } from 'react-icons/md' // ImLocation2
import { ImLocation2 } from 'react-icons/im'


function Contact() {
  return (
    <section>
      <div style={{display: 'flex',}} >
      <Container  fluid className="home-section">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1 style={{marginTop: '7%'}} >
                Feel free to <span className="purple">connect </span>with me
              </h1>
              <div className="contact">
                <div style={{marginTop: '5%'}} >
                <li className="social-icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaPhone />
                  </a>
                </li>
                  <a style={{fontSize: '150%'}} >
                    +91 9073777793 
                  </a>
                </div>
                <div style={{marginTop: '2%'}} >
                <li className="social-icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <MdOutlineMailOutline />
                  </a>
                </li>
                  <a style={{fontSize: '150%'}} >
                    sudiptabhattacharjee000@gmail.com
                  </a>
                </div>
                <div style={{marginTop: '2%',marginBottom: '8%'}}>
                <li className="social-icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <ImLocation2 />
                  </a>
                </li>
                  <a style={{fontSize: '150%'}}>West Bengal, India</a>
                </div>
              </div>
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/sudiptadip"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub  />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/sudipta-bhattacharjee-60a89122a/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn  />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      </div>
    </section>
  );
}

export default Contact;
