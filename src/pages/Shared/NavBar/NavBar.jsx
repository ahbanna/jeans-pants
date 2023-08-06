import React from "react";
import { Container, Image, Nav, NavLink, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header-area">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <NavLink to="/">
            <Image src={logo} alt="Jeans Pants" width="100" height="40" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mx-auto"> */}
            <Nav className="ml-auto menu-items">
              <NavLink to="/"></NavLink>
              <NavLink to="/"></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
