import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavLink from '../NavLink/NavLink';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="navBar">
      <Container className="navbar-container">
        <Link to="/">
          <img src='/imagenes/logo.png' alt="logo_soho" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link nav-menu">
              HOME
            </Link>
            <NavDropdown title="COLECCIÓN">
              <NavDropdown.Item href="/categoria/muebles">Muebles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categoria/bazar">Bazar</NavDropdown.Item>
            </NavDropdown>
            <Link to="" className="nav-link">
              NOSOTROS
            </Link>
          </Nav>
          <NavLink />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
