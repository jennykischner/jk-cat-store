import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "../components/CartWidget";
import logo from "../assets/img/imagen-logo.jpeg";
import {Link} from "react-router-dom"


const NavBar = () => {
  return (  
    <div> 
      <Navbar>
        <Link to={"/"}>
          <img className="Logo" src={logo} alt="Logo" />
        </Link>
       
        <Container>
          <Nav className="me-auto">
            <Link to={"/alimentos"} className="nav-link">Alimentos</Link>
            <Link to={"/accesorios"} className="nav-link">Accesorios</Link>
            <Link to={"/contact"} className="nav-link">Contacto</Link>
          </Nav>
        </Container>
        <Link to={"/Cart"}>
          <CartWidget/>
        </Link>
        
      </Navbar>
    </div>
  );
};

export default NavBar;