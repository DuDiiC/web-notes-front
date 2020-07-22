import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';

import CompactNote from './../note/compactNote';

import UserService from './../../services/userService';
import NoteService from './../../services/noteService';

class LoggedMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                noteIds: []
            },
            notes: []
        };
    }

    componentDidMount() {
        UserService.getCurrentUser()
            .then((response) => {
                const user = response.data;
                this.setState({ user });
                if (this.state.user.id) {
                    NoteService.getUserNotes(this.state.user.id)
                        .then((response) => {
                            const notes = response.data;
                            this.setState({ notes })
                        })
                        .catch(error => { console.log(error) })
                }
            })
            .catch(error => { console.log(error) });
    }

    render() {
        return (
            <div>
                {!localStorage.getItem('token') && (
                    <Redirect to="/login" />
                )}
                <Container>
                    <h1 className='text-center'>
                        Witaj {this.state.user.username}! 
                    </h1>
                
                    <Row>
                        {this.state.notes.map((note) => {
                            return <CompactNote className='mx-2' note={note} key={note.id} />
                        })}
                        <Col sm={6} md={4} lg={3} className='my-auto text-center'>
                            <Button 
                                variant='warning' 
                                size='lg'
                                className='m-3'
                            >
                                Dodaj nową notatkę
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}

export default LoggedMain;