import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//
import { Icon, InlineIcon } from "@iconify/react";
import bxsHome from "@iconify-icons/bx/bxs-home";

const Menu = () => {
  return (
    <div className="container">
      <Navbar bg="light p-3" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <Icon icon={bxsHome} />
            HOME
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/examples">
              <Nav.Link>Examples</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
