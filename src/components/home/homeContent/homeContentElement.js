import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './../home.css';

function HomeContentElement(props) {
    return (
        <Container className='p-2 mt-4'>
            <Row className='d-flex justify-content-center mx-4 pt-3'>
                <h2 className='white-text text-shadow'>
                    <b>{props.header}</b>
                </h2>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Image src={props.image} className='img-shadow'></Image>
            </Row>
            <Row className='d-flex justify-content-center mx-5 pt-3'>
                <p className='white-text text-shadow'>
                    <b>{props.content}</b>
                </p>
            </Row>
        </Container>
    );
}

export default HomeContentElement;