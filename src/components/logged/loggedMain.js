import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './../../services/authService';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function LoggedMain() {
    return (
        <Container className='text-center'>
            <Link to='/'>
                <Button 
                    variant='warning' 
                    className='my-5' 
                    onClick={AuthService.logout}
                >
                    Wyloguj
                </Button>
            </Link>
        </Container>
    );
}

export default LoggedMain;