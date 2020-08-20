import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import DateConverter from './../../services/dateConverter';

import './compactNote.css';

class CompactNote extends Component {
    render() {
        return (
            <>
                <Col sm={6} md={4} lg={3}>
                    <Link to={ "/notes/" + this.props.note.id } style={{ textDecoration: 'none' }}>
                        <div className='note-border m-3 p-3'>
                            <span className='text-left small-text grey-text'>utworzono: <b>{DateConverter.toReadableDate(this.props.note.createdAt)}</b></span>
                            <h5>{this.props.note.title}</h5>
                        </div>
                    </Link>
                </Col>
            </>
        )
    };
}

export default CompactNote;