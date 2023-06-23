import React, {useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Navbar, Nav, NavDropdown, Container,Form, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { UserContext } from '../../UserContext';
import './appbar.css'
const Appbar = () => {
  const {user} = useContext(UserContext)

  return (
    <div>
      <Navbar bg="Appbar" expand="md" fixed='top'>
        <Container fluid>
          <Navbar.Brand  as={Link} to="/">
            <img src={Logo} alt="logo" width="auto" height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          
          <Navbar.Collapse id="navbarScroll" >
            <Form className="d-flex">
                <FormControl
                  htmlSize = {'80'}
                  type="search"
                  placeholder="Search for brand, color, etc."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            <Nav
              className="me-auto my-2 my-lg-0 on_right"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/product" >Products</Nav.Link>
              <Nav.Link as={Link} to="/new" >New</Nav.Link>
              <NavDropdown title="About" id="navbarScrollingDropdown">
                <Nav.Link as={Link} to="/how-it-work" >How It Works</Nav.Link>
                <Nav.Link as={Link} to="/buying-guide" >Buying Guide</Nav.Link>
                <Nav.Link as={Link} to="/selling-guide" >Selling Guide</Nav.Link>
                

                <NavDropdown.Divider /> 
                <Nav.Link as={Link} to="/authantication" >Authantication</Nav.Link>
              </NavDropdown>
              
            </Nav>
            { 
              user ? 
                <Button 
                  as={Link} to="/profile" 
                  variant='outline-primary' 
                  className='btn-login'
                > 
                  My account
                </Button>
              :
                <Button 
                  as={Link} to="/login" 
                  variant='outline-primary' 
                  className='btn-login'  
                > 
                  Log in 
                </Button>
              
            }
            <Button as={Link} to="/sell" variant='outline-dark' className='btn-signin' > Sell </Button>
            
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  );
}

export default Appbar;
