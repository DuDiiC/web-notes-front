import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './navigation.css';


function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" className='first-color-bg'>
                <Navbar.Brand>
                    <Link to='/' className='link-text' style={{ textDecoration: 'none' }}>
                        <Button variant='warning'>
                            <h3 className='p-0 m-0'>
                                <b className='grey-text'>WEB NOTES</b>
                            </h3>
                        </Button>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Link to='/login' style={{ textDecoration: 'none' }} >
                            <Button variant='warning'>
                                <b className='grey-text'>LOGOWANIE</b>
                            </Button>
                        </Link>
                        <Link to='/register' style={{ textDecoration: 'none' }}>
                            <Button variant='warning'>
                                <b className='grey-text'>REJESTRACJA</b>
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;