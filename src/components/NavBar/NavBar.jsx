import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavLink from '../NavLink/NavLink';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src='/imagenes/logo.png' alt="logo_soho"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/categoria" className="nav-link">
              <NavDropdown title="COLECCIÓN">
                <NavDropdown.Item href="#muebles">Muebles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#bazar">Bazar</NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Link to="" className="nav-link">
              NOSOTROS
            </Link>
          </Nav>
          <NavLink />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
