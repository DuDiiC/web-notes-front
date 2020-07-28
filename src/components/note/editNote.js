import React, { Component } from 'react';
import { Button, Modal, Row, Col, Form, Spinner } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import NoteService from './../../services/noteService';

import edit from './../../images/edit-48-grey.png';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            editNote: {
                title: this.props.note.title,
                content: this.props.note.content,
            },
            loading: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.editNote = this.editNote.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
    }

    handleClose() {
        this.setState({
            show: false,
            editNote: {
                title: this.props.note.title,
                content: this.props.note.content,
            },
        });
    }

    handleShow() {
        this.setState({ show: true });
    }

    onChangeTitle(e) {
        const { value } = e.target;
        this.setState(prevState => ({
            editNote: {
                ...prevState.editNote,
                title: value,
            },
        }));
    }

    onChangeContent(e) {
        const { value } = e.target;
        this.setState(prevState => ({
            editNote: {
                ...prevState.editNote,
                content: value,
            },
        }));
    }

    editNote(e) {
        // edit note
        e.preventDefault();
        if(this.state.editNote.title && this.state.editNote.content) {
            this.setState({ loading: true });
            NoteService.updateNote(this.props.note.id, this.state.editNote)
                .then(window.location.reload())
                .catch((error) => {
                    console.log(error);
                    this.setState({ loading: false });
                })
        } else {
            console.log('Can\'t save empty note!');
        }
    }

    render() {
        const { show } = this.state;
        return (
            <>
                <input
                    type='image'
                    src={edit}
                    alt='edytuj'
                    width={30}
                    height={30}
                    className='link-text'
                    onClick={this.handleShow}
                />

                <Modal
                    show={show}
                    onHide={this.handleClose}
                    size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edycja notatki</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.editNote}>
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
                                                    value={this.state.editNote.title}
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
                                                    value={this.state.editNote.content}
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
                                    <ReactMarkdown source={this.state.editNote.content} />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row>
                                <Button
                                    variant='outline-dark'
                                    className='mb-2 mr-2'
                                    onClick={this.handleClose}
                                    disabled={this.state.loading} >
                                    Odrzuć zmiany
                                </Button>
                                <Button
                                    type='submit'
                                    variant='warning'
                                    className='mb-2'
                                    disabled={this.state.loading} >
                                    Edytuj
                                    {this.state.loading && (
                                        <Spinner animation='border' variant='secondary' size='sm' className='ml-2' />
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

export default EditNote;