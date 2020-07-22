import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import './note.css';

class CompactNote extends Component {
    render() {
        return(
            <>
                <Col sm={6} md={4} lg={3}>
                    <div className='note-border m-3 p-3'>
                        <span className='text-left small-text grey-text'>utworzono: <b>{this.props.note.createdAt}</b></span>
                        <hr className='mt-2 mb-4 p-0' />
                        <h4>{this.props.note.content}</h4>
                        <span className='grey-text'><b>{this.props.note.noteStatus}</b></span>
                    </div>
                </Col>
            </>
        )
    };
}

export default CompactNote;