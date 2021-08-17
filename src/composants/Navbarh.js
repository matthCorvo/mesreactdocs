import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar ,Nav } from 'react-bootstrap'
import logo from './logo192.png';

function Navbarh({ title }) {
    return (
       <div className="navbarheading">
      <h1  >{title}</h1>
      <Navbar variant="dark">
    <Navbar.Brand className="Brand"href="#home">
    <img src={logo} className="App-logo" alt="logo" />
       <span>React</span></Navbar.Brand>
    <Nav className="me-auto">
      <a className="link" href="#home">Docs</a>
    </Nav>
  </Navbar>
    </div>

    );
}

export default Navbarh
