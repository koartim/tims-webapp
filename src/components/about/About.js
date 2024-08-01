import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profilePic from '../../assets/profile.JPG'


export const About = () => {
    return (
        <Container id="about" className="mt-5">
        <Row className="justify-content-start mt-5">
        <Col md={4}>
          <Image 
            src={profilePic} 
            variant="top"
            rounded 
            fluid 
            className="profile-pic" />
        </Col>
          <Col md={8} lg={8} xl={8}>
            <Card>
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                Hi! My name is Timothy Koar and I am full stack developer with a BSc in Accounting. 
                I enjoy solving complex problems and and learning new things. 
                Over the years I have worked with a variety of different tech stacks, and as a result I have
                developed an ability to recognize patterns and get up to speed quickly.  
                My most recent experience is as a software developer for 'REI Systems', a software company that develops and maintains
                a variety of different software products for numerous governmental bodies.

                Please visit the contact me page for any business inquiries
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default About;