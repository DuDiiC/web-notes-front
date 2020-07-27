import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
                    NoteService.getUserNotes(this.state.user.id)
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
                    <h1 className='text-center'>
                        Witaj {this.state.user.username}!
                    </h1>

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