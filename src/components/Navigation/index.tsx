import React from 'react'
import { Container,Nav,Navbar,NavbarBrand } from "react-bootstrap"


export interface INavigation {}

const Navigation: React.FC<INavigation> = (props) => {
  return (
    <Container>
     
      <Navbar expand = 'md' style = {{ height: '10vh' }} > 

        <NavbarBrand>TALKO</NavbarBrand>
        <Navbar.Toggle aria-controls = 'basic-navbar-nav'><i className = 'fas fa-bars' ></i></Navbar.Toggle>
        <Navbar.Collapse id = 'basic-navbar-nav'>
          <Nav className = 'ms-auto'>
            <Nav.Link href = '#'>Register</Nav.Link>
            <Nav.Link href = '#'>Login</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

    </Container>
  )
}

export default Navigation
