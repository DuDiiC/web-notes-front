import React, { Component } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

import trash from './../../images/trash-48-grey.png';

class RemoveNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            loading: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    handleClose() { this.setState({ show: false }) }
    handleShow() { this.setState({ show: true }) }

    removeNote(e) {
        e.preventDefault();
        //usuwanie notatki - logika
    }

    render() {
        const { show } = this.state;
        return (
            <>
                <input
                    type='image'
                    src={trash}
                    alt='przenieś do kosza'
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
                            Usuwanie notatki
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Czy na pewno chcesz przenieść notatkę do kosza?</p>
                    </Modal.Body>
                    <Modal.Footer onSubmit={this.removeNote}>
                        <Button
                            variant='outline-dark'
                            className='mb-2 mr-2'
                            onClick={this.handleClose} >
                            Nie
                        </Button>
                        <Button
                            type='submit'
                            variant='warning'
                            className='mb-2'>
                            Tak
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
         );
    }
}

export default RemoveNote;