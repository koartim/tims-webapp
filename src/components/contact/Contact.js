import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, loading: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, error: false });
        setFormData({ name: '', message: '' });
      } else {
        setFormStatus({ submitted: false, error: true });
      }
    } catch (error) {
      setFormStatus({ submitted: false, error: true });
    }
  };

  return (
    <Container id="contact" className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Me</h2>
          {formStatus.submitted && (
            <Alert variant="success">
              Your message has been sent successfully!
            </Alert>
          )}
          {formStatus.error && (
            <Alert variant="danger">
              There was an error sending your message. Please try again.
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className='mt-3'>
            <Form.Group controlId="formName">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='mb-3'
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className='mb-3'
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={formStatus.loading} className="w-25">
            {formStatus.loading ? 
            (
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />) 
            : 
            (
              'Submit'
            )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;