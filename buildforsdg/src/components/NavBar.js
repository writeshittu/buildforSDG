import React, { Component } from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUP';


class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="gray" variant="light" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + '/images/Teamlogo.png'} alt="BrandLogo" width="60px" /> </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="center p-3 bg-warning" >
                    <Nav.Link href="#" className=" br hover-bg-white-60 active text-white" >HOME</Nav.Link>
                    <Nav.Link href="#"  className="br hover-bg-white-60">OUR CAUSE</Nav.Link>
                    <Nav.Link href="#"  className="br hover-bg-white-60">ABOUT US</Nav.Link>
                    <Nav.Link href="#"  className="hover-bg-white-60">DONATION</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Link href="#"style={{color:"yellow"}} className="bg-warning hover-bg-white-60"><SignUp/></Nav.Link>
                <Nav.Link href="#" className="bg-warning hover-bg-white-60"><Login/></Nav.Link>
            </Nav>
            </Navbar >
        )
    }
}

export default Navigation;
