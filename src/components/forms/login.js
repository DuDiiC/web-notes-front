import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

import AuthService from './../../services/authService';

import './forms.css';

import logo from './../../images/notes-144.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: '',
            password: '',
            loading: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true
        })

        AuthService.login(this.state.username, this.state.password)
            .then(() => {
                this.props.history.push("/logged");
                window.location.reload();
            }, error => {
                this.setState({
                    loading: false
                })
            });

        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                { localStorage.getItem('token') && (
                    <Redirect to="/logged" />
                ) }
                <div className='first-color-bg'>
                    <Row>
                        <Col xs={1} md={3} lg={4}></Col>
                        <Col xs={10} md={6} lg={4}>
                            <Container className='form-container pt-1 pb-1'>
                                <hr className='mx-5' />
                                <Row className='justify-content-center'>
                                    <Link to='/' >
                                        <Image src={logo} width='100' className='link-text img-shadow'></Image>
                                    </Link>
                                </Row>
                                <Row className='justify-content-center mb-3'>
                                    <h2 className='text-center grey-text'>LOGOWANIE</h2>
                                </Row>
                                <Form onSubmit={this.handleLogin}>
                                    <Form.Group as={Row} className='mx-5'>
                                        <Form.Label column sm={3} className='grey-text'><b>login</b></Form.Label>
                                        <Col sm={9}>
                                            <Form.Control
                                                type='text'
                                                placeholder='login...'
                                                name='username'
                                                value={this.state.username}
                                                onChange={this.onChangeUsername}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mx-5'>
                                        <Form.Label column sm={3} className='grey-text'><b>hasło</b></Form.Label>
                                        <Col sm={9}>
                                            <Form.Control
                                                type='password'
                                                placeholder='hasło...'
                                                name='password'
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='d-flex justify-content-center'>
                                        <Button
                                            type='submit'
                                            variant='outline-dark'
                                            className='mb-2'
                                            disabled={this.state.loading}
                                        >
                                            Zaloguj
                                        {this.state.loading && (
                                                <Spinner animation='border' variant='secondary' size='sm' className='ml-2' />
                                            )}
                                        </Button>
                                    </Form.Group>
                                </Form>
                                <hr className='mx-5' />
                            </Container>
                        </Col>
                        <Col xs={1} md={3} lg={4}></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Login;