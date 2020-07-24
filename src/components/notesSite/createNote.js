import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function CreateNoteModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant='warning'
                size='lg'
                className='m-3'
                onClick={handleShow}
            >
                Dodaj notatkę
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='lg'>
                <Modal.Header>
                    <Modal.Title>Nowa notatka</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tutaj będzie formularz tworzenia notatki oraz podgląd na żywo w markdown
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='light' onClick={handleClose}>
                        <span className='grey-text'>Odrzuć</span>
                    </Button>
                    <Button variant='warning' onClick={handleClose}>
                        <span className='grey-text'>Stwórz</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateNoteModal;