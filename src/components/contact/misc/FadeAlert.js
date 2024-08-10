import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import './FadeAlert.css';

const FadeAlert = ({ variant, message, show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onClose();
        }, 500); // Match the duration with the CSS transition
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`alert-container ${visible ? 'show' : 'hide'}`}>
      <Alert variant={variant} className={`fade-alert ${!visible ? 'fade-out' : ''}`}>
        {message}
      </Alert>
    </div>
  );
};

export default FadeAlert;
