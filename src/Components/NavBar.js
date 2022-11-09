import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function NavBar() {
  return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TwiceTiFy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Top Semanal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        );
    }

export default NavBar;