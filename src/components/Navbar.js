import React from "react";
import { useUser, useAuth } from "reactfire";
import "firebase/auth";
import "firebase/performance";
import {
	Navbar,
	Form,
	Nav,
	FormControl,
	Button,
	Image,
	NavDropdown
} from "react-bootstrap";
import defaultPicture from "../media/defaultPicture.png";
import { Link, useHistory } from "react-router-dom";
export default function MyNavbar() {
	const usuario = useUser();
	const auth = useAuth();
	let history = useHistory();
	const onSelectEvent = (key, event) => {
		history.replace(`/${key}`);
	};
	const cerrarSesion = () => {
		auth.signOut();
		history.replace(`/`);
  };
  let fotoPerfil;
  try{
    fotoPerfil = usuario.photoURL ? usuario.photoURL : defaultPicture
  }catch(ex){
    fotoPerfil = defaultPicture
  }
	return (
		<Navbar
			bg="success"
			expand="lg"
			variant="dark"
			sticky="top"
			onSelect={onSelectEvent}>
			<Nav.Link eventKey="perfil">
				<Image
					src={fotoPerfil}
					roundedCircle
					style={{ maxWidth: "50px", height: "auto" }}
				/>
			</Nav.Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link eventKey="home">Inicio</Nav.Link>
					<Nav.Link eventKey={`${usuario.uid}/recetas`}>Mis recetas</Nav.Link>
					<NavDropdown title="⚙" id="nav-dropdown">
						<NavDropdown.Item eventKey={`NuevaReceta`}>
							Nueva receta
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="perfil">Mi perfil</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={cerrarSesion}>
							<span className="text-danger">Cerrar sesión</span>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<FormControl
						type="text"
						placeholder="Buscar receta..."
						className="mr-sm-2"
					/>
					<Button variant="outline-light">Buscar</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}
