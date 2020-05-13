import React, { Component } from 'react';
import { Nav, Navbar, } from 'react-bootstrap'

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="gray" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + '/images/Teamlogo.png'} alt="BrandLogo" width="60px" /> </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="center" >
                    <Nav.Link href="#" style={{ color: "white" }}>HOME</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }}>OUR CAUSE</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }}>ABOUT US</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }}>DONATION</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Link href="#" style={{ color: "yellow" }}>SIGN UP</Nav.Link>
                <Nav.Link href="#" style={{ color: "yellow" }}>LOGIN</Nav.Link>
            </Nav>
            </Navbar >
        )
    }
}

export default Navigation;
