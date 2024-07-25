import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
        <Navbar.Brand className="ml-3" href="/">tim.koar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;