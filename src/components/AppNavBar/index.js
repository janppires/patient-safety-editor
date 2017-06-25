import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './styles';
import NHSLogo from '../NHSLogo';

const AppNavBar = ({isOpen, toggle}) => {
  return (
    <Container>
      <Navbar style={styles.navBar} color="faded" light toggleable fixed='top'>
        <NavbarToggler right onClick={toggle} />
        <NavbarBrand href="/">Patient Safety</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Topics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NHSLogo className='d-none d-md-flex'/>  
      </Navbar>
    </Container>
  )
}

export default AppNavBar;