import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';


function Login() {
    return (
        <div className='first-color-bg'>
            <Row>
                <Col xs={1} md={3} lg={4}></Col>
                <Col xs={10} md={6} lg={4}>
                    <Container className='form-container pt-5 pb-3'>
                        <h2 className='text-center'>LOGOWANIE</h2>
                        <hr className='mx-5' />
                        <Form>
                            <Form.Group as={Row} className='mx-5'>
                                <Form.Label column xs={3}>login</Form.Label>
                                <Col xs={9}>
                                    <Form.Control type='text' placeholder='login...'></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mx-5'>
                                <Form.Label column xs={3}>hasło</Form.Label>
                                <Col xs={9}>
                                    <Form.Control type='password' placeholder='hasło...'></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='d-flex justify-content-center'>
                                <Button type='submit' variant='dark'>
                                    Zaloguj
                                </Button>
                            </Form.Group>
                        </Form>

                    </Container>
                </Col>
                <Col xs={1} md={3} lg={4}></Col>
            </Row>
        </div>
    );
}

export default Login;