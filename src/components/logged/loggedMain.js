import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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
                if(this.state.user.id) {
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
                <Container className='text-center'>
                    <h1 className='m-5 p-5'>zalogowano</h1>
                    <h3>
                        {this.state.user.id}
                    </h3>
                    <h5>
                        {this.state.user.username}
                    </h5>
                    {this.state.user.noteIds.map((id) => {
                        return <li key={id}>{id}</li>
                    })}
                    {this.state.notes.map((note) => {
                        return (
                            <div key={note.id}>
                                <h1>{note.id}</h1>
                                <p>{note.content}</p>
                            </div>
                        );
                    })} 
                </Container>
            </div>
        )
    };
}

export default LoggedMain;