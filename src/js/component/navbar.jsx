import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nvbar() {
    return (
        <Navbar id="navbar" expand="lg" className="bg-dark text-white sticky-top" > 
                        <Container>
                            <Navbar.Brand href="#home" className="text-white">Start Bootsrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
                                <Navbar.Collapse id="basic-navbar-nav" className="lg-d-flex justify-content-end ">
                                    <Nav>
                                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                                        <Nav.Link href="#link" className="text-white">About</Nav.Link>
                                        <Nav.Link href="#link" className="text-white">Services</Nav.Link>
                                        <Nav.Link href="#link" className="text-white">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                        </Container>
                    </Navbar>
    )
    }

export default Nvbar;