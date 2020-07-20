import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import github from './../../../images/github-black-96.png';
import linkedin from './../../../images/linkedin-black-100.png';
import facebook from './../../../images/facebook-black-100.png';

function HomeFooter() {
    return (
        <Container>
            <Row className='my-3'>
                <Col xs={4} className='text-right'>
                    <a href='https://github.com/DuDiiC/' className='link-text' target='_blank' rel="noopener noreferrer">
                        <Image src={github} width='80' style={{ opacity: '70%' }}></Image>
                    </a>
                </Col>
                <Col xs={4} className='text-center'>
                    <a href='https://www.linkedin.com/in/maciejdudek96/' className='link-text' target='_blank' rel="noopener noreferrer">
                        <Image src={linkedin} width='80' style={{ opacity: '70%' }}></Image>
                    </a>
                </Col>
                <Col xs={4} className='text-left'>
                    <a href='https://www.facebook.com/DuDiiCc/' className='link-text' target='_blank' rel="noopener noreferrer">
                        <Image src={facebook} width='80' style={{ opacity: '70%' }}></Image>
                    </a>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <p><b className='grey-text'>kontakt: Maciej.Dudek.DEV@gmail.com</b></p>
            </Row>
        </Container>
    );
}

export default HomeFooter;