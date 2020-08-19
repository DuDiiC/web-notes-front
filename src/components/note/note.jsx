import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import EditNote from '../modals/editNote';
import ArchiveNote from '../modals/archiveNote';
import RemoveNote from '../modals/removeNote';
import PermanentlyRemoveNote from '../modals/permanentlyDeleteNote';

class Note extends Component {

    render() {
        return (
            <div className='note-border m-3 p-3'>
                <p>{this.props.note.createdAt}</p>
                <h3>{this.props.note.title}</h3>
                <hr className='mt-2 mb-4 p-0' />
                <ReactMarkdown source={this.props.note.content} />
                {this.props.note.noteStatus === 'ACTIVE' && (
                    <EditNote note={this.props.note} />
                )}
                {this.props.note.noteStatus !== 'ARCHIVED' && (
                    <ArchiveNote noteId={this.props.note.id} />
                )}
                {this.props.note.noteStatus !== 'DELETED' && (
                    <RemoveNote noteId={this.props.note.id} />
                )}
                {this.props.note.noteStatus === 'DELETED' && (
                    <PermanentlyRemoveNote noteId={this.props.note.id} />
                )}
            </div>
        )
    };
}

export default Note;