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
              <Col lg={6} md={6} sm={6} xs={12} className="text-center image-container">
                <Image 
                  src={profilePic} 
                  roundedCircle 
                  fluid 
                  className="profile-pic my-4" 
                />
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                <Card.Body>
                <Tabs defaultActiveKey="aboutMe" id="about-tabs" className="custom-tabs">
                    <Tab eventKey="aboutMe" title="Bio">
                      <Card.Title className="text-center">About Me</Card.Title>
                      <Card.Text className="about-text">
                        Hi, I'm Timothy Koar, a full stack developer from Asbury Park, NJ. I've been a professional developer for 5 years with my most recent experience being a fullstack senior developer for REI Systems. 
                        <br></br>
                        Over the years, I've worked with numerous different tech stacks and am well versed with every phase of the development lifecycle. I can get up to speed fast and make an immediate impact for any team.
                        <br></br>
                        When I'm not coding, you can find me exploring the latest in tech, playing guitar, or relaxing on the beach with a good book.
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