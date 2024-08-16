import React from "react";
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className="bg-dark text-white fixed-bottom">
            <Container className="text-center py-3">
                <p className="mb-0">Copyright © Your Website 2024</p>
            </Container>
        </footer>

    )
}

export default Footer;