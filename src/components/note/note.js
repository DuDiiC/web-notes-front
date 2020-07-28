import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import EditNote from './editNote';
import RemoveNote from './removeNote';

class Note extends Component {
    render() {
        return(
            <div className='note-border m-3 p-3'>
                <p>{this.props.note.createdAt}</p>
                <h3>{this.props.note.title}</h3>
                <hr className='mt-2 mb-4 p-0' />
                <ReactMarkdown source={this.props.note.content} />
                <EditNote note={this.props.note} />
                <RemoveNote />
            </div>
        )
    };
}

export default Note;