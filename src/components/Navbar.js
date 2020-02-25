import React from "react";
import { useUser } from "reactfire";
import 'firebase/auth';
import 'firebase/performance';
import { Navbar,NavDropdown,Form,Nav,FormControl,Button,Image } from "react-bootstrap";
import { NavLink, Link,  useHistory,
  useLocation } from "react-router-dom";
export default function MyNavbar() { 
  const usuario = useUser();
  let history = useHistory();
    return (
      <Navbar bg="success" expand="lg" variant="dark" sticky="top">
        <Nav.Item>
          <Link to='/perfil'>
          <Image src={usuario.photoURL} roundedCircle />
          </Link>
        </Nav.Item>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link onClick={() => {history.replace('/receta')}}>Receta</Nav.Link>
      <Nav.Link onClick={() => {history.replace('/')}}>Inicio</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar receta..." className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
  }