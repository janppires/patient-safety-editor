import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar as StrapNavBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import LogoNHS from "components/common/logo-nhs";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Container>
        <StrapNavBar color="faded" light toggleable fixed="top">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={RRNavLink} to="/">
            Patient Safety
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/categories">
                  Category
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/images">
                  Images
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <LogoNHS className="d-none d-md-flex" />
        </StrapNavBar>
      </Container>
    );
  }
}
