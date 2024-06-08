import React from 'react';
import { Container } from 'react-bootstrap';


const Navbar = () => {
    return (
        <Container>
        <nav className="navbar">
            <ul className="navbars">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        </Container>
    );
};

export default Navbar;
