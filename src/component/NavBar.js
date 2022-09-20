import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar=()=>(
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">My App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            {/* <Nav.Link href="/signin">Sign in</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
    
);

export default NavBar;