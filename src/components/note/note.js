import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

class Note extends Component {
    render() {
        return(
            <Container className='note-border m-3 p-3'>
                <p>{this.props.note.createdAt}</p>
                <h3>{this.props.note.title}</h3>
                <hr className='mt-2 mb-4 p-0' />
                <ReactMarkdown source={this.props.note.content} />
            </Container>
        )
    };
}

export default Note;