import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, loading: false });

  const MAX_MESSAGE_LENGTH = 255;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger

    if (!formData.name || !formData.message) {
      setFormStatus({ submitted: false, error: true, loading: false });
    }

    setFormStatus({ ...formStatus, loading: true });

    const formDataToSend = new FormData();
    formDataToSend.append('contact', JSON.stringify({ name: formData.name, message: formData.message }));
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, error: false, loading: false});
        setFormData({ name: '', message: '', file: null });
      } else {
        setFormStatus({ submitted: false, error: true, loading: false });
      }
    } catch (error) {
      setFormStatus({ submitted: false, error: true, loading: false });
    }
  };

  return (
    <Container id="contact" className="contact-container mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Me</h2>
          {formStatus.submitted && (
            <Alert variant="success">
              Thanks for reaching out! I'll get back to you asap!
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
                maxLength={255}
                className='mb-3'
              />
              <small className="character-counter">
                {formData.message.length}/{MAX_MESSAGE_LENGTH} characters
              </small>
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label>Attachment</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={handleChange}
                className='mb-3'
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={formStatus.loading} className="w-25 mt-3">
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