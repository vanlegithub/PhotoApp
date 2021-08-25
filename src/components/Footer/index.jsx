import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";

Footer.propTypes = {};

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="footer__link footer__title"
              href="https://github.com/vanlegithub"
              target="_blank"
              rel="noopener noreferrer"
            >
            Github
            </a>
          </Col>
             <Col xs="auto">
            <a
              className="footer__link footer__title"
              href="https://www.linkedin.com/in/vanleprofile/"
              target="_blank"
              rel="noopener noreferrer"
            >
            Linkedin
            </a>
          </Col>
            <Col xs="auto">
            <div>
             levan02402@gmail.com
            </div>
          </Col>
          <Col xs="auto">
            <div>
             Copyright &copy;2021 by VanLe
            </div>
          </Col>
         
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
