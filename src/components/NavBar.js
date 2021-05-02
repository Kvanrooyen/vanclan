import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>VanClan</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/' className='text-white'>
              Dinner{" "}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/dessert' className='text-white'>
              Desserts
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
