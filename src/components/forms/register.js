import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Form, Button, Image, Spinner, Row, Col, Alert } from 'react-bootstrap';

import AuthService from './../../services/authService';

import './forms.css';

import logo from './../../images/notes-144.png';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            registerSuccess: false,
            registerFailed: false
        }
    }

    render() {
        return (
            <div>
                {localStorage.getItem('token') && (
                    <Redirect to="/notes" />
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
                                    <h2 className='text-center grey-text'>REJESTRACJA</h2>
                                </Row>
                                {this.state.registerSuccess && (
                                    <Alert
                                        variant='success'
                                        onClose={() => this.setState({ registerSuccess: false })}
                                        dismissible
                                        className='mx-5 text-center'>
                                            Konto utworzone pomyślnie.
                                            Aby dokończyć rejestrację, proszę kliknąć w link aktywacyjny
                                            wysłany na podany adres e-mail.
                                        </Alert>
                                )}
                                {this.state.registerFailed && (
                                    <Alert
                                        variant='danger'
                                        onClose={() => this.setState({ registerFailed: false })}
                                        dismissible
                                        className='mx-5 text-center'>
                                            Rejestracja nie powiodła się. Użytkownik o podanej nazwie już istnieje.
                                        </Alert>
                                )}
                                <Formik
                                    initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup
                                            .string()
                                            .email('Wprowadź poprawny adres e-mail!')
                                            .required('Adres e-mail jest wymagany!'),
                                        username: Yup
                                            .string()
                                            .min(5, 'Nazwa użytkownika nie może być krótsza niż 5 znaków!')
                                            .matches(/^[A-Za-z]+$/, 'Nazwa użytkownika może zawierać tylko litery alfabetu łacińsiego!')
                                            .required('Nazwa użytkownika jest wymagana!'),
                                        password: Yup
                                            .string()
                                            .min(8, 'Hasło powinno zawierać 8-16 znaków!')
                                            .max(16, 'Hasło powinno zawierać 8-16 znaków!')
                                            .required('Hasło jest wymagane!')
                                            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                                                'Hasło powinno zawirać co najmniej jedną: małą literę, dużą literę, cyfrę, znak specjalny'),
                                        confirmPassword: Yup
                                            .string()
                                            .oneOf([Yup.ref('password'), null], 'Pola haseł muszą być zgodne!')
                                    })}
                                    onSubmit={async (values, { resetForm, setSubmitting }) => {
                                        setSubmitting(true);
                                        await AuthService.register(values.email, values.username, values.password)
                                            .then((response) => {
                                                // show alert with e-mail send
                                                this.setState({ registerSuccess: true });
                                                setSubmitting(false);
                                            })
                                            .catch( (error) => {
                                                if(error.response.status === 409) {
                                                    this.setState({ registerFailed: true });
                                                } else {
                                                    console.log(error);
                                                }
                                            })
                                        setSubmitting(false);
                                        resetForm();
                                    }}
                                >
                                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group as={Row} className='mx-5'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Adres e-mail'
                                                    name='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isInvalid={touched.email && errors.email}
                                                    disabled={isSubmitting}
                                                />
                                                {touched.email && errors.email ? (
                                                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                                                ) : null}
                                            </Form.Group>
                                            <Form.Group as={Row} className='mx-5'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='nazwa użytkownika'
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
                                            <Form.Group as={Row} className='mx-5'>
                                                <Form.Control
                                                    type='password'
                                                    placeholder='Hasło'
                                                    name='confirmPassword'
                                                    value={values.confirmPassword}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                                                    disabled={isSubmitting}
                                                />
                                                {touched.confirmPassword && errors.confirmPassword ? (
                                                    <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>
                                                ) : null}
                                            </Form.Group>
                                            <Form.Group as={Row} className='d-flex justify-content-center'>
                                                <Button
                                                    type='submit'
                                                    variant='outline-dark'
                                                    className='my-2'
                                                    disabled={isSubmitting}>
                                                    Zarejestruj
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
    };
}

export default Register;