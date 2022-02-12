import React from 'react'
import { Container,Nav,Navbar,NavbarBrand } from "react-bootstrap"
import { Link,useNavigate } from 'react-router-dom'

export interface INavigation {}

const Navigation: React.FC<INavigation> = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
     
      <Navbar expand = 'md' style = {{ height: '10vh' }} > 

        <NavbarBrand onClick = { () => navigate('/') }>TALKO</NavbarBrand>
        <Navbar.Toggle aria-controls = 'basic-navbar-nav'><i className = 'fas fa-bars' ></i></Navbar.Toggle>
        <Navbar.Collapse id = 'basic-navbar-nav'>
          <Nav className = 'ms-auto'>
            <Nav.Link href = '#' onClick = { () => navigate('/register') }>Register</Nav.Link>
            <Nav.Link href = '#' onClick = { () => navigate('/login') }>Login</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

    </Container>
  )
}

export default Navigation
