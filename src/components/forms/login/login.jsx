import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form, Button, Image, Spinner, Alert } from 'react-bootstrap';

import AuthService from '../../../services/authService';

import './../forms.css';

import logo from './../../../images/notes-144.png';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wrongCredentials: false
        };
    }

    render() {
        return (
            <div>
                {localStorage.getItem('token') && (
                    <Redirect to="/notes/active" />
                )}
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
                                {this.state.wrongCredentials && (
                                    <Alert
                                        variant='danger'
                                        onClose={() => this.setState({ wrongCredentials: false }) }
                                        dismissible
                                        className='mx-5 text-center'>
                                            Błędny login lub hasło!
                                    </Alert>
                                )}
                                <Formik
                                    initialValues={{ username: '', password: '' }}
                                    validationSchema={Yup.object().shape({
                                        username: Yup.string().required('Nazwa użytkownika jest wymagana!'),
                                        password: Yup.string().required('Hasło jest wymagane!')
                                    })}
                                    onSubmit={ async (values, { resetForm, setSubmitting }) => {
                                        setSubmitting(true);
                                        await AuthService.login(values.username, values.password)
                                            .then(() => {
                                                this.props.history.push("/notes/active");
                                                window.location.reload();
                                            })
                                            .catch((error) => {
                                                if(error.response.status === 401) {
                                                    this.setState({ wrongCredentials: true });
                                                } else {
                                                    console.log(error);
                                                }
                                            });
                                        setSubmitting(false);
                                        resetForm();
                                    }}
                                >
                                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group as={Row} className='mx-5'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Nazwa użytkownika'
                                                    name='username'
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isInvalid={touched.username && errors.username}
                                                    disabled={isSubmitting}
                                                />
                                                {touched.username && errors.username ? (
                                                    <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
                                                ) : null}
                                            </Form.Group>
                                            <Form.Group as={Row} className='mx-5'>
                                                <Form.Control
                                                    type='password'
                                                    placeholder='Hasło'
                                                    name='password'
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isInvalid={touched.password && errors.password}
                                                    disabled={isSubmitting}
                                                />
                                                {touched.password && errors.password ? (
                                                    <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                                                ) : null}
                                            </Form.Group>
                                            <Form.Group as={Row} className='d-flex justify-content-center'>
                                                <Button
                                                    type='submit'
                                                    variant='outline-dark'
                                                    className='mb-2'
                                                    disabled={isSubmitting}
                                                >
                                                    Zaloguj
                                                    {isSubmitting && (
                                                        <Spinner animation='border' variant='secondary' size='sm' className='ml-2' />
                                                    )}
                                                </Button>
                                            </Form.Group>
                                        </Form>
                                    )}
                                </Formik>
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