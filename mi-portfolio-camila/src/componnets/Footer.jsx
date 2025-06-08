import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub } from "react-icons/fa";
import "../css/footer.css";


const Footer = () => {
 

  return (
    <>
  
      <div >
        <footer className="footer">
          <Row className="text-center align-items-center">
            <Col>
              <hr className="footer-line" />
              <p className="footer-text">Sígueme en:</p>
              <div className="footer-icons">
                <a
                  href="https://www.instagram.com/camiii_juarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/CamilaJuarez99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <FaGithub />
                </a>
              </div>
              <p className="footer-copy">
                &copy; {new Date().getFullYear()} Camila Juarez
              </p>
            </Col>
          </Row>
        </footer>
      </div>
    </>
  );
};

export default Footer;
