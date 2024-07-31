import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css'; // Make sure to check this file for any required styles

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    // add an event listener to detect clicks outside the drop down
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-dark text-white">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
        <Navbar.Brand className='ml-3' href="/">timkoar.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" ref={dropdownRef}>
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link onClick={() => setExpanded(false)}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link onClick={() => setExpanded(false)}>Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;