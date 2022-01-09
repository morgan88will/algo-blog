import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Algo Blog</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            {" "}
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/about">About</Link>
          </Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};
