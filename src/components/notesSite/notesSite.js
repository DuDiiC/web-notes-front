import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import ReactLoading from 'react-loading';

import CompactNote from '../note/compactNote';
import CreateNoteModal from './createNote';

import UserService from '../../services/userService';
import NoteService from '../../services/noteService';

class NotesSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                noteIds: []
            },
            notes: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            UserService.getCurrentUser()
                .then((response) => {
                    const user = response.data;
                    this.setState({ user });
                    if (this.state.user.id) {
                        NoteService.getUserNotes(this.state.user.id, this.props.noteStatus)
                            .then((response) => {
                                const notes = response.data;
                                this.setState({ notes })
                                this.setState({ loading: false });
                            })
                            .catch(error => {
                                console.log(error);
                                this.setState({ loading: false });
                            })
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ loading: false });
                });
        });
    }

    render() {
        return (
            <div className='white-bg'>
                {!localStorage.getItem('token') && (
                    <Redirect to="/login" />
                )}
                <Container>
                    <Row className='mt-5 mb-3'>
                        <Col sm={4} className='my-1'>
                            <Link
                                to='/notes/active'
                                style={{ textDecoration: "none" }} >
                                <Button
                                    variant='warning'
                                    block
                                    disabled={this.props.noteStatus === "ACTIVE"}>
                                    <b>AKTYWNE</b>
                                </Button>
                            </Link>
                        </Col>
                        <Col sm={4} className='my-1'>
                            <Link to='/notes/archived' style={{ textDecoration: "none" }}>
                                <Button
                                    variant='warning'
                                    block
                                    disabled={this.props.noteStatus === "ARCHIVED"}>
                                    <b>ARCHIWUM</b>
                                </Button>
                            </Link>
                        </Col>
                        <Col sm={4} className='my-1'>
                            <Link to='/notes/deleted' style={{ textDecoration: "none" }}>
                                <Button
                                    variant='warning'
                                    block
                                    disabled={this.props.noteStatus === "DELETED"}>
                                    <b>KOSZ</b>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.loading ? (
                            <>
                                <ReactLoading type={"spin"} color={"#ffc107"} height={"20%"} width={"20%"} className='mx-auto my-5' />
                            </>
                        ) : (
                                <>
                                    {this.state.notes.map((note) => {
                                        return <CompactNote className='mx-2' note={note} key={note.id} />
                                    })}
                                    <Col sm={6} md={4} lg={3} className='my-auto text-center'>
                                        <CreateNoteModal />
                                    </Col>
                                </>
                            )}
                    </Row>
                </Container>
            </div>
        )
    };
}

export default NotesSite;