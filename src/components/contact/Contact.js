import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, loading: false });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const MAX_MESSAGE_LENGTH = 255;
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (formStatus.submitted) {
      setShowSuccessAlert(true);
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
        const hideTimer = setTimeout(() => {
          setFormStatus({ ...formStatus, submitted: false });
        }, 500); // Match this to the CSS transition duration
        return () => clearTimeout(hideTimer);
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (formStatus.error) {
      setShowErrorAlert(true);
      const timer = setTimeout(() => {
        setShowErrorAlert(false);
        const hideTimer = setTimeout(() => {
          setFormStatus({ ...formStatus, error: false });
        }, 500); // Match this to the CSS transition duration
        return () => clearTimeout(hideTimer);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.submitted, formStatus.error]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (!!files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      setFormStatus({ submitted: false, error: true, loading: false });
    }

    setFormStatus({ ...formStatus, loading: true });

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('message', formData.message);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }
    try {
      const response = await fetch(`${API}/contact`, {
        method: 'POST',
        body: formDataToSend 
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
          <div className={`alert-container ${showSuccessAlert ? 'show' : 'hide'}`}>
            <Alert variant="success" className={`fade-alert ${!showSuccessAlert ? 'fade-out' : ''}`}>
              Thanks for reaching out! I'll get back to you asap!
            </Alert>
          </div>
          <div className={`alert-container ${showErrorAlert ? 'show' : 'hide'}`}>
            <Alert variant="danger" className={`fade-alert ${!showErrorAlert ? 'fade-out' : ''}`}>
              There was an error sending your message. Please try again.
            </Alert>
          </div>
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