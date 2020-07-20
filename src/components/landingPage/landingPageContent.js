import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import LandingPageContentElement from './landingPageContentElement';

import noteImg from './../../images/notes-144.png';
import contentImg1 from './../../images/markdown-white-100.png';
import contentImg2 from './../../images/todo-list-white-100.png';
import contentImg3 from './../../images/responsive-white-100.png';

function LandingPageContent() {
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <h1 className='text-center grey-text'>
                        <b>WEB NOTES</b>
                    </h1>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Image src={noteImg} className='img-shadow'></Image>
                </Row>
                <Row className='d-flex justify-content-center my-2'>
                    <Col sm={4} className='text-sm-right text-center my-auto'>
                        <a href='https://github.com/DuDiiC/web-notes' target='_blank' rel="noopener noreferrer">
                            <Button variant='warning' size='sm' className='my-1'>
                                <b className='grey-text'>Kod back-end</b>
                            </Button>
                        </a>
                    </Col>
                    <Col sm={4} className='text-center my-auto'>
                        <a href='https://web-notes-example.herokuapp.com/swagger-ui.html' target='_blank' rel="noopener noreferrer">
                            <Button variant='warning' className='my-1'>
                                <b className='grey-text'>Dokumentacja swagger</b>
                            </Button>
                        </a>
                    </Col>
                    <Col sm={4} className='text-sm-left text-center my-auto'>
                        <a href='https://github.com/DuDiiC/web-notes-front' target='_blank' rel="noopener noreferrer">
                            <Button variant='warning' size='sm' className='my-1'>
                                <b className='grey-text'>Kod front-end</b>
                            </Button>
                        </a>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <h3 className='text-center grey-text'>
                        Aplikacja webowa do tworzenia i organizacji prostych notatek.
                    </h3>
                </Row>
            </Container>
            <Container fluid className='mt-5 first-color-bg box-shadow'>
                <Row className='py-5'>
                    <Col lg={4} className='text-center my-auto'>
                        <LandingPageContentElement
                            header="Obsługa Markdowna"
                            image={contentImg1}
                            content="Notatki są tworzone przy użyciu prostego w obsłudze języka Markdown, 
                            który umożliwia tworzenie notatek zawierających listy, tabele czy fragmenty kodu."
                        />
                    </Col>
                    <Col lg={4} className='text-center my-auto'>
                        <LandingPageContentElement
                            header="Twórz, archiwizuj, usuwaj"
                            image={contentImg2}
                            content="Zarządzaj swoimi notatkami i przeglądaj tylko te aktywne. Pozostałe możesz
                            zarchiwuzować lub usunąć."
                        />
                    </Col>
                    <Col lg={4} className='text-center my-auto'>
                        <LandingPageContentElement
                            header="Wygodny, responsywny interfejs"
                            image={contentImg3}
                            content="Aplikacji można używać zarówno na komputerze, tablecie jak i telefonie -
                            jest łatwa w obsłudze, ponieważ zawiera tylko niezbędne funkcje do zarządzania notatkami."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default LandingPageContent;