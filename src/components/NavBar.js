import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>VanClan</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/' className='text-white'>
            Dinner
          </Nav.Link>
          <Nav.Link href='/dessert' className='text-white'>
            Desserts
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
