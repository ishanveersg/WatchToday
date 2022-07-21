import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> WatchToday</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/watchlist">Watchlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;