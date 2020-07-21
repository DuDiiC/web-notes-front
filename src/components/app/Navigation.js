import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from './../../images/notes-48.png';

function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand>
                    <Link to='/' className='link-text' style={{ textDecoration: 'none' }}>
                        <Image src={logo} className='img-shadow mr-2'></Image>
                        <b className='grey-text'>WEB NOTES</b>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Link to='/login' style={{ textDecoration: 'none' }} >
                            <Button variant='warning' className='m-2'>
                                <b className='grey-text'>LOGOWANIE</b>
                            </Button>
                        </Link>
                        <Link to='/register' style={{ textDecoration: 'none' }}>
                            <Button variant='warning' className='m-2'>
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