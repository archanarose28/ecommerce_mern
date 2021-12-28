import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">MERN Shopping Cart</Navbar.Brand>
            <Button href="/cart">Cart</Button>
          </Container>
        </Navbar>
      </div>
    );
  }
}
