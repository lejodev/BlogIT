import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cookies from "js-cookie";

function BasicExample() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    function hasToken() {
      return Cookies.get("token") ? true : false;
    }
    setAuthenticated(hasToken());
  }, []);

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
          {authenticated ? (
            <></>
          ) : (
            <Nav.Link href="/register">Sign Up</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
