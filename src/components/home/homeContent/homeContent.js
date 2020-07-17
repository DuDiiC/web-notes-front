import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import noteImg from './../../../images/notes-144.png';
import HomeContentElement from './homeContentElement';

function HomeContent() {
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <h1 className='text-center grey-text'>
                        <b>WEB NOTES</b>
                    </h1>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Image src={noteImg}></Image>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <h3 className='text-center grey-text'>
                        Aplikacja webowa do tworzenia i organizacji prostych notatek.
                    </h3>
                </Row>
            </Container>
            <Container fluid className='mt-5 first-color-bg box-shadow'>
                <Row className='py-5'>
                    <Col md={4} className='text-center my-auto'>
                        <HomeContentElement
                            header="Treść"
                            image={noteImg}
                            content="Napisałem szczegóły tej wiadomości"
                        />
                    </Col>
                    <Col md={4} className='text-center my-auto'>
                        <HomeContentElement
                            header="Treść"
                            image={noteImg}
                            content="Napisałem szczegóły tej wiadomości"
                        />
                    </Col>
                    <Col md={4} className='text-center my-auto'>
                        <HomeContentElement
                            header="Treść"
                            image={noteImg}
                            content="Napisałem szczegóły tej wiadomości"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default HomeContent;