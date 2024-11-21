import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "./Contact.css";
import FadeAlert from './misc/FadeAlert';

const Contact = ({ csrfHeader, csrfToken }) => {
  const [formData, setFormData] = useState({ name: '', email:'', message: '', file: null });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, loading: false });

  const apiUrl = process.env.REACT_APP_API_URL;
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
    if (!formData.name || !formData.message || !formData.email) {
      setFormStatus({ submitted: false, error: true, loading: false });
      return;
    }

    setFormStatus({ ...formStatus, loading: true });

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('email', formData.email)

    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

      try {
        const response = await fetch(`${apiUrl}/contact`, {
          method: 'POST',
          headers: {
              'X-XSRF-TOKEN': csrfToken
          },
          credentials: 'include',
          body: formDataToSend
        });
        if (response.ok) {
          setFormStatus({ submitted: true, error: false, loading: false });
          setFormData({ name: '', email: '', message: '', file: null });
        } else {
          setFormStatus({ submitted: false, error: true, loading: false });
        }
      } catch (error) {
        setFormStatus({ submitted: false, error: true, loading: false });
      }

      // try {
      //   const response = await fetch("http://localhost:8080/api/contact", {
      //     method: 'POST',
      //     headers: {
      //         'X-XSRF-TOKEN': csrfToken
      //     },
      //     credentials: 'include',
      //     body: formDataToSend
      //   });
      //   if (response.ok) {
      //     setFormStatus({ submitted: true, error: false, loading: false });
      //     setFormData({ name: '', email: '', message: '', file: null });
      //   } else {
      //     setFormStatus({ submitted: false, error: true, loading: false });
      //   }
      // } catch (error) {
      //   setFormStatus({ submitted: false, error: true, loading: false });
      // }
  };

  return (
    <Container id="contact" className="contact-container mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Me</h2>
          <FadeAlert
            variant="success"
            message="Thanks for reaching out! I'll get back to you asap!"
            show={formStatus.submitted}
            onClose={() => setFormStatus({ ...formStatus, submitted: false })}
          />
          <FadeAlert
            variant="danger"
            message="There was an error sending your message. Please try again."
            show={formStatus.error}
            onClose={() => setFormStatus({ ...formStatus, error: false })}
          />
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
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <small className="character-counter">
                {formData.message.length}/{MAX_MESSAGE_LENGTH} characters
              </small>
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
            </Form.Group>
            <Form.Group controlId="formFile" className='mt-3'>
              <Form.Label>Attachment</Form.Label>
              <Form.Control 
                type="file"
                name="file"
                onChange={handleChange}
                className="custom-file-input"
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={formStatus.loading} className="w-25 mt-3">
              {formStatus.loading ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
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