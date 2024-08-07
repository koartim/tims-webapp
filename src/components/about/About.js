import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profilePic from '../../assets/profile.JPG';
import './About.css';

const About = () => {
  return (
    <Container id="about" className="mt-5 pt-5">
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <Card className="about-card shadow-sm">
            <Row className="no-gutters">
              <Col md={4} className="text-center">
                <Image 
                  src={profilePic} 
                  roundedCircle 
                  fluid 
                  className="profile-pic my-4 ml-3" 
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="text-center">About Me</Card.Title>
                  <Card.Text className="about-text">
                    Hi, I'm Timothy Koar, a full stack developer from Asbury Park, NJ. Over the years, I've honed my skills across various tech stacks, including Angular, React, Spring Boot, and MySQL.
                    <br /><br />
                    When I'm not coding, you can find me exploring the latest in tech, playing guitar or sitting on the beach reading a book.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;