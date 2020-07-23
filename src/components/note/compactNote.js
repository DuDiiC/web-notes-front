import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import './note.css';

class CompactNote extends Component {
    render() {
        return(
            <>
                <Col md={6}>
                    <div className='note-border m-3 p-3'>
                        <span className='text-left small-text grey-text'>utworzono: <b>{this.props.note.createdAt}</b></span>
                        <h5>{this.props.note.title}</h5>
                        <hr className='mt-2 mb-4 p-0' />
                        {/* {this.props.note.content.split('\n').map((line, i) => {
                            return <p key={i} className='m-0 p-0'>{line}</p>
                        })} */}
                        <span className='grey-text'><b>{this.props.note.noteStatus}</b></span>
                    </div>
                </Col>
            </>
        )
    };
}

export default CompactNote;