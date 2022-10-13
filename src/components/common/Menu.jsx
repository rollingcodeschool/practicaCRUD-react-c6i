import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cafe Branch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink end className="nav-item nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/administrador">
              Administrar
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/registro">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
