import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profilePic from '../assets/profile.JPG'


export const About = () => {
    return (
        <Container id="about" className="mt-5">
        <Row className="justify-content-start mt-5">
        <Col md={4}>
          <Image src={profilePic} rounded fluid className="profile-pic" />
        </Col>
          <Col md={8} lg={8} xl={8}>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Hi, I'm a developer with a passion for creating amazing web applications.
                  I have experience in various technologies including React, Node.js, and more.
                  I love to learn new things and take on new challenges.
                  Hi, I'm a developer with a passion for creating amazing web applications.
                  Hi, I'm a developer with a passion for creating amazing web applications.
                  I have experience in various technologies including Rea
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default About;