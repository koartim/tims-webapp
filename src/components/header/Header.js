import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ( { onToggle } ) => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setExpanded(false);
      onToggle(false);
    }
  };

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle(newExpanded);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-dark text-white">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
        <Link to="/" className='navbar-brand ml-3'>timkoar.com</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" ref={dropdownRef}>
          <Nav className="ml-3">
            <LinkContainer to="/">
              <Nav.Link onClick={() => {setExpanded(false); onToggle(false)}}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link onClick={() => {setExpanded(false); onToggle(false)}}>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link onClick={() => {setExpanded(false); onToggle(false)}} >Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;