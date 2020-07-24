import React, { Component, setState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

class CreateNoteModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            newNote: {
                title: '',
                content: '',
            },
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.createNote = this.createNote.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
    }

    handleClose() {
        this.setState({
            show: false,
            newNote: {
                title: '',
                content: '',
            },
        });
    }

    handleShow() {
        this.setState({
            show: true,
        });
    }

    onChangeTitle(e) {
        this.setState({
            newNote: {
                title: e.target.value,
            },
        });
    }

    onChangeContent(e) {
        this.setState({
            newNote: {
                content: e.target.value,
            },
        });
    }

    createNote = (e) => {
        e.preventDefault();
        console.log("tworzę notatkę")
        this.handleClose();
    }

    render() {
        const { show } = this.state;
        return (
            <>
                <Button
                    variant='warning'
                    size='lg'
                    className='m-3'
                    onClick={this.handleShow}
                >
                    Dodaj notatkę
                </Button>

                <Modal
                    show={show}
                    onHide={this.handleClose}
                    size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Nowa notatka</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.createNote}>
                        <Modal.Body>
                            <Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <Row>
                                            <Col md={2} className='my-auto text-md-right text-center'>
                                                <Form.Label className='p-0 m-0'><b className='grey-text'>Tytuł</b></Form.Label>
                                            </Col>
                                            <Col md={10} className='my-auto'>
                                                <Form.Control
                                                    size='lg'
                                                    type='text'
                                                    placeholder='tytuł...'
                                                    name='title'
                                                    autoComplete='off'
                                                    value={this.state.newNote.title}
                                                    onChange={this.onChangeTitle}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Row>
                                            <Col>
                                                <Form.Control
                                                    as='textarea'
                                                    rows="10"
                                                    placeholder='treść...'
                                                    name='content'
                                                    autoComplete='off'
                                                    value={this.state.newNote.content}
                                                    onChange={this.onChangeContent}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Row className='d-flex justify-content-center'>
                                        <b className='grey-text'>Podgląd:</b>
                                    </Row>
                                    <hr />
                                    <ReactMarkdown source={this.state.newNote.content} />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row>
                                <Button type='submit' variant='warning'>
                                    <span className='grey-text'>Stwórz</span>
                                </Button>
                            </Row>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default CreateNoteModal;