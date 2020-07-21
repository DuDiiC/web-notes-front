import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './../../services/authService';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class LoggedMain extends Component {
    render() {
        return (
            <div>
                {!localStorage.getItem('token') && (
                    <Redirect to="/login" />
                )}
                <Container className='text-center'>
                    <h1 className='m-5 p-5'>zalogowano</h1>
                </Container>
            </div>
        )
    };
}

export default LoggedMain;