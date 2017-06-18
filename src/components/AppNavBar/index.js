import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavBar = ({isOpen, toggle}) => {
  return (
    <div>
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={toggle} />
        <NavbarBrand href="/">Patient Safety</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
      </Navbar>
    </div>
  )
}

export default AppNavBar;