import React from 'react';
import { Container, Row, Col, Card, Image, Tabs, Tab } from 'react-bootstrap';
import profilePic from '../../assets/profile.JPG';
import './About.css';

const About = () => {
  return (
    <Container id="about" className="mt-5 pt-5">
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <Card className="about-card shadow-sm">
            <Row className="no-gutters">
              <Col md={4} sm={6} className="text-center">
                <Image 
                  src={profilePic} 
                  roundedCircle 
                  fluid 
                  className="profile-pic my-4 ml-3" 
                />
              </Col>
              <Col md={8} sm={6}>
                <Card.Body>
                <Tabs defaultActiveKey="aboutMe" id="about-tabs" className="custom-tabs">
                    <Tab eventKey="aboutMe" title="Bio">
                      <Card.Title className="text-center">About Me</Card.Title>
                      <Card.Text className="about-text">
                        Hi, I'm Timothy Koar, a full stack developer from Asbury Park, NJ. Over the years, I've honed my skills across various tech stacks, including Angular, React, Spring Boot, and MySQL.
                        <br /><br />
                        When I'm not coding, you can find me exploring the latest in tech, playing guitar or sitting on the beach reading a book.
                      </Card.Text>
                    </Tab>
                    <Tab eventKey="resume" title="Resume">
                      <Card.Title className="text-center">Resume</Card.Title>
                      <Card.Text className="about-text">
                        <p><strong>Experience</strong></p>
                        <p>Software Developer at XYZ Company</p>
                        <p>Full Stack Developer at ABC Corporation</p>
                        <p><strong>Education</strong></p>
                        <p>Bachelor's in Computer Science from DEF University</p>
                      </Card.Text>
                    </Tab>
                  </Tabs>
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