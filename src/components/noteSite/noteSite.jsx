import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import Note from '../note';
import NoteService from '../../services/noteService';

class NoteSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: {
                id: '',
                title: '',
                content: '',
                noteStatus: ''
            },
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            NoteService.getNote(this.props.match.params.id)
                .then((response) => {
                    const note = response.data;
                    this.setState({ note });
                    this.setState({ loading: false });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ loading: false });
                });
        });
    }

    render() {
        return (
            <Container className='white-bg py-5'>
                {this.state.loading ? (
                    <ReactLoading
                        type={"spin"}
                        color={"#ffc107"}
                        height={"20%"}
                        width={"20%"}
                        className='mx-auto my-5' />
                ) : (
                        <Note note={this.state.note} />
                    )}
            </Container>
        )
    };
}

export default NoteSite;