import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Note from '../note/note';
import NoteService from '../../services/noteService';

class NoteSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: ""
        };
    }

    componentDidMount() {
        NoteService.getNote(this.props.match.params.id)
            .then((response) => {
                const note = response.data;
                this.setState({ note });
            })
            .catch(error => { console.log(error) });
    }

    render() {
        return (
            <Container className='white-bg py-5'>
                <Note note={this.state.note} />
            </Container>
        )
    };
}

export default NoteSite;