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
              <Col md={4} sm={6} xs={12} className="text-center image-container">
                <Image 
                  src={profilePic} 
                  roundedCircle 
                  fluid 
                  className="profile-pic my-4" 
                />
              </Col>
              <Col md={8} sm={6} xs={12}>
                <Card.Body>
                  <Tabs defaultActiveKey="aboutMe" id="about-tabs" className="custom-tabs">
                    <Tab eventKey="aboutMe" title="Bio">
                      <Card.Title className="text-center">About Me</Card.Title>
                      <Card.Text className="about-text">
                        Hi, I'm Timothy Koar, a full stack developer from Asbury Park, NJ. I've been a professional developer for 5 years with my most recent experience being a fullstack senior developer for REI Systems. 
                        <br /><br />
                        Over the years, I've worked with numerous different tech stacks and am well versed with every phase of the development lifecycle. I can get up to speed fast and make an immediate impact for any team.
                        <br /><br />
                        When I'm not coding, you can find me exploring the latest in tech, playing guitar, or relaxing on the beach with a good book.
                      </Card.Text>
                    </Tab>
                    <Tab eventKey="resume" title="Resume">
                      <Card.Title className="text-center">Resume</Card.Title>
                      <Card.Text className="resume-text">
                        <h5>Timothy Koar</h5>
                        <p><strong>Email:</strong> koartimothy@gmail.com | <strong>Location:</strong> Interlaken, NJ</p>

                        <h6>Summary</h6>
                        <p>
                          Full stack developer with expertise in Angular, React, Spring Boot, and MySQL. Experienced in all phases of the development lifecycle and adept at problem-solving. Holds a 'Secret' security clearance.
                        </p>

                        <h6>Experience</h6>
                        <p>
                          <strong>REI Systems</strong> | Software Developer<br />
                          <em>November 2022 - Present | Remote</em>
                        </p>
                        <ul>
                          <li>Enhanced user experience with UI improvements and workflow optimizations.</li>
                          <li>Developed and maintained key features for government web applications.</li>
                          <li>Conducted BDD testing to ensure robust functionality.</li>
                        </ul>

                        <p>
                          <strong>Charter Communications</strong> | Software Developer<br />
                          <em>July 2020 – August 2022 | Remote</em>
                        </p>
                        <ul>
                          <li>Led knowledge transfers and supported remote teams.</li>
                          <li>Improved legacy applications and contributed to new workflows.</li>
                        </ul>

                        <p>
                          <strong>Infosys</strong> | Associate Software Developer<br />
                          <em>October 2019 - October 2022 | Remote</em>
                        </p>
                        <ul>
                          <li>Completed training and contributed to internal projects.</li>
                        </ul>

                        <h6>Education</h6>
                        <p>
                          <strong>Flatiron School</strong> | Full Stack Web Development<br />
                          <em>2019 | New York, NY</em>
                        </p>
                        <p>
                          <strong>Monmouth University</strong> | B.S. in Business Administration<br />
                          <em>2018 | West Long Branch, NJ</em>
                        </p>

                        <h6>Skills</h6>
                        <p>
                          Angular, React, Spring Boot, MySQL, Jenkins, AWS, Ruby, Java, JavaScript, CSS, Bootstrap
                        </p>
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