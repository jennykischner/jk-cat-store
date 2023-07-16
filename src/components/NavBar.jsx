import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
        <div>
        <Navbar>
            <img className="Logo" src="../img/imagen-logo.jpeg" alt="Logo" />
            <Navbar.Brand className="titulo" href="#home">JK CAT STORE</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#features">Alimentos</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <Nav.Link href="#pricing">Adopcion</Nav.Link>
          </Nav>
        </Container>
  
    <CartWidget/>
    </Navbar>
    </div>
  );
};

export default NavBar;
