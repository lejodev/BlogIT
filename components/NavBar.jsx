import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Cookies from "js-cookie";
import {
  FaUser,
  FaSignInAlt,
  FaBlog,
  FaInfoCircle,
  FaLaptopCode,
  FaMicrochip,
  FaMobileAlt,
  FaPlusSquare,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector((state) => state.user.user);

  return (
    <Navbar expand="lg" className="bg-light navbar-light">
      <Container>
        <Navbar.Brand href="/" className="text-dark">
          BlogIt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-dark">
              <FaBlog className="me-1" /> Blog
            </Nav.Link>
            <Nav.Link href="/about" className="text-dark">
              <FaInfoCircle className="me-1" /> About
            </Nav.Link>
            <NavDropdown
              title={
                <span className="text-dark">
                  <FaLaptopCode className="me-1" /> Hot topics
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/categories/AI" className="text-dark">
                <FaMicrochip className="me-1" /> AI
              </NavDropdown.Item>
              <NavDropdown.Item href="/categories/tech" className="text-dark">
                <FaLaptopCode className="me-1" /> Tech
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/categories/gadgets"
                className="text-dark"
              >
                <FaMobileAlt className="me-1" /> Gadgets
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/all" className="text-dark">
                ALL
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link href="/newPost" className="text-dark">
                  <FaPlusSquare className="me-1" /> Create
                </Nav.Link>
                <Nav.Link href="/user" className="text-dark">
                  <FaUser className="me-1" /> {user.user.username}
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/register" className="text-dark">
                <FaUser className="me-1" /> Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
