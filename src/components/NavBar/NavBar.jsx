import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
  return (
    <nav>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ricomerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Gifcards</Nav.Link>
            <Nav.Link href="#pricing">Hogar</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link href="#deets">Indumentaria</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Envíos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <CartWidget />  
    </nav>
  );
}

export default NavBar;