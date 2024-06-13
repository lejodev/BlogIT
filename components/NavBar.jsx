import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark">
      <Container>
        <Navbar.Brand href="/">BlogIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Hot topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categories/AI">AI</NavDropdown.Item>
              <NavDropdown.Item href="/categories/tech">Tech</NavDropdown.Item>
              <NavDropdown.Item href="/categories/gadgets">
                Gadgets
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">ALL</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="/login">Sign in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
