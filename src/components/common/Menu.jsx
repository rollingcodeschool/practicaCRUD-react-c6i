import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
const navegacion = useNavigate();

const logout = ()=>{
  //borrar el localstorage
  localStorage.removeItem('tokenUsuario');
  setUsuarioLogueado({});
  navegacion('/');
}

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
            {usuarioLogueado.nombre ? (
              <>
                <NavLink end className="nav-item nav-link" to="/administrador">
                  Administrar
                </NavLink>
                <NavLink end className="nav-item nav-link" to="/registro">
                  Registro
                </NavLink>
                <Button variant="dark" onClick={logout}>Logout</Button>
              </>
            ) : (
              <NavLink end className="nav-item nav-link" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
