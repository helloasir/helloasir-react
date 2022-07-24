import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Learn React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="https://vat201.com" target= "_blank">VAT Calculator</Nav.Link>
            <NavDropdown title="Socials" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FaceBook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Other Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;