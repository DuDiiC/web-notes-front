import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from './../../services/authService';
import { Container } from 'react-bootstrap';
import UserService from './../../services/userService';

class LoggedMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                noteIds: []
            },
        };
    }

    componentDidMount() {
        UserService.getCurrentUser()
            .then((response) => {
                const user = response.data;
                this.setState({ user });
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
                    {this.state.user.noteIds.map(function (id) {
                        return <li>{id}</li>
                     }) }
                </Container>
            </div>
        )
    };
}

export default LoggedMain;