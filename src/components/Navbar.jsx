import React from 'react';
import { Navbar,NavDropdown} from 'react-bootstrap';


const Navbbar = () => {

  return (
    <div>
      <Navbar bg="black" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=" "
          ></img>
        </Navbar.Brand>
        <NavDropdown
          bg="black"
          title="Menu"
          id="collasible-nav-dropdown"
          style={{ color: "#5299d3" }}
        >
          <NavDropdown.Item style={{ color: "#5299d3" }} href="/">
            Home
          </NavDropdown.Item>
          <NavDropdown.Item style={{ color: "#5299d3" }} href="/react">
            React
            <NavDropdown.Item
              style={{ color: "#5299d3" }}
              href="/react#introduction"
            >
              Introduction
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "#5299d3" }}
              href="/react#prerequisites"
            >
              Prerequisites
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "#5299d3" }} href="/react#jsx">
              JSX
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "#5299d3" }} href="/react#setup">
              Set-up a React Native project
            </NavDropdown.Item>{" "}
            <NavDropdown.Item
              style={{ color: "#5299d3" }}
              href="/react#components"
            >
              Components
            </NavDropdown.Item>{" "}
            <NavDropdown.Item
              style={{ color: "#5299d3" }}
              href="/react#routing"
            >
              Routing
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "#5299d3" }}
              href="/react#rendering"
            >
              Rendering
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "#5299d3" }} href="/react#state">
              State
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "#5299d3" }} href="/react#refs">
              References
            </NavDropdown.Item>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );


};

export default Navbbar;

