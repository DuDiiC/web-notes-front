import React, { Component } from 'react';
import { Modal, Button, Spinner, Form } from 'react-bootstrap';
import activate from '../../../images/activate-grey-48.png';
import NoteService from '../../../services/noteService';

class ActivateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            loading: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.activateNote = this.activateNote.bind(this);
    }

    handleClose() { this.setState({ show: false }) }
    handleShow() { this.setState({ show: true }) }

    activateNote(e) {
        e.preventDefault();
        if(this.props.noteId) {
            this.setState({ loading: true }, () => {
                NoteService.updateNoteStatus(this.props.noteId, "ACTIVE")
                    .then(() => {
                        this.setState({
                            loading: false,
                            show: false
                        });
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                        this.setState({ loading: false });
                    })
            })
        } else {
            console.log('Can\'t activate note without ID.');
        }
    }

    render() {
        const { show } = this.state;
        return (
            <>
                <input
                    type='image'
                    src={activate}
                    alt='aktywuj notatkę'
                    width={30}
                    height={30}
                    className='link-text'
                    onClick={this.handleShow}
                />

                <Modal
                    show={show}
                    onHide={this.handleClose}
                    size='sm'
                    centered >
                    <Modal.Header closeButton >
                        <Modal.Title>
                            Aktywowanie notatki
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Czy na pewno chcesz aktywować ponownie wybraną notatkę?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Form onSubmit={this.activateNote}>
                            <Button
                                variant='outline-dark'
                                className='mb-2 mr-2'
                                onClick={this.handleClose}
                                disabled={this.state.loading} >
                                Nie
                            </Button>
                            <Button
                                type='submit'
                                variant='warning'
                                className='mb-2'
                                disabled={this.state.loading} >
                                Tak
                            {this.state.loading && (
                                    <Spinner
                                        animation='border'
                                        variant='secondary'
                                        size='sm'
                                        className='ml-2' />
                                )}
                            </Button>
                        </Form>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ActivateNote;