import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ( { onToggle } ) => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && expanded) {
      setExpanded(false);
      onToggle(false);
    }
  };

  const handleToggle = () => {
    if (window.innerWidth <= 992) { // Only toggle if the window width is small enough
      setExpanded((prevExpanded) => !prevExpanded);
      onToggle(!expanded);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBrandClick = (event) => {
    event.preventDefault();
    event.target.classList.add('pressed');
    setTimeout(() => {
      event.target.classList.remove('pressed');
      handleToggle(); // Toggle the navbar dropdown
    }, 150); // Adjust the duration as needed
  };

  return (
    <header className="bg-dark text-white">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
        <Link to="/" onClick={handleBrandClick} className='navbar-brand ml-3'>timkoar.com</Link>
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