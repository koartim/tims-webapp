import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-dark text-light py-4'>
            <Container>
                <Row>
                    <Col md={4}>
                    <h5>Follow Me!</h5>
                    <div>
                        <a href="https://www.linkedin.com/in/timothy-koar-802366115/" className="text-light me-3" aria-label="LinkedIn Profile">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/koartim" className="text-light me-3" aria-label="GitHub Profile">
                            <FaGithub size={30} />
                        </a>
                    </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6}>
                        <p>&copy; {new Date().getFullYear()} timkoar.com All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <a href="/privacy-policy" className="text-light me-3">Privacy Policy</a>
                        <a href="/terms-of-service" className="text-light">Terms of Service</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;