import React, { PureComponent } from "react";
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
import NHSLogo from "components/common/logo-nhs";

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
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
          <NavbarBrand href="/">Patient Safety</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Topics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NHSLogo className="d-none d-md-flex" />
        </StrapNavBar>
      </Container>
    );
  }
}