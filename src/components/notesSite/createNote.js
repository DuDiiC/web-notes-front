import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import NoteService from '../../services/noteService';

class CreateNoteModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            newNote: {
                title: '',
                content: '',
            },
            loading: false,
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
        const { value } = e.target;
        this.setState(prevState => ({
            newNote: {
                ...prevState.newNote,
                title: value,
            },
        }));
    }

    onChangeContent(e) {
        const { value } = e.target;
        this.setState(prevState => ({
            newNote: {
                ...prevState.newNote,
                content: value,
            },
        }));
    }

    createNote = (e) => {
        e.preventDefault();
        if (this.state.newNote.title && this.state.newNote.content) {
            this.setState({ loading: true });
            NoteService.saveNote(this.state.newNote)
                .then(window.location.reload())
                .catch((error) => {
                    console.log(error);
                    this.setState({ loading: false })
                });
        } else { console.log("Can save empty note!") }
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
                                <Col xl={6}>
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
                                                    disabled={this.state.loading}
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
                                                    disabled={this.state.loading}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col xl={6}>
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
                                <Button
                                    type='submit'
                                    variant='warning'
                                    className='mb-2'
                                    disabled={this.state.loading}
                                >
                                    {this.state.loading ? (
                                        <>
                                            Tworzę...
                                            <Spinner animation='border' variant='secondary' size='sm' className='ml-2' />
                                        </>
                                    ) : (
                                            <>
                                            Stwórz
                                        </>
                                    )}
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