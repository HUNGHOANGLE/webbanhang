import React from 'react'
import { Navbar,Nav, Form, Container, NavDropdown, Button, FormControl } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import menuItem from '../../assets/image/menu-regular-24.png'


const Topnav = ({hideSideBar}) => {
    

  return (
    <Navbar bg="light" expand="lg"  style={{position: "sticky"}}  >
        <Container fluid>
            {/* Dòng này dùng để scroll cái sidebar vào trong */}
            <Navbar.Brand onClick={(e) => {
                e.preventDefault()
                hideSideBar()
            }} >
                <img src={menuItem} alt ='menu'  />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to="/dashboard" >Dashboard</Nav.Link>
                
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Topnav

