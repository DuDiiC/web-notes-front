import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import LandingPage from '../landingPage';
import Register from '../forms/register';
import Login from '../forms/login';
import NotesSite from '../notesSite';
import NoteSite from '../noteSite';
import AuthService from '../../services/authService';
import logo from '../../images/notes-48.png';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = {
      token: localStorage.getItem('token')
    }
  }

  logout() {
    AuthService.logout();
    this.setState({
      token: localStorage.getItem('token')
    })
  }

  render() {
    const { token } = this.state;

    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="sm" className='white-bg'>
            <Navbar.Brand>
              <Link to='/' className='link-text' style={{ textDecoration: 'none' }}>
                <Image src={logo} className='img-shadow mr-2'></Image>
                <b className='grey-text'>WEB NOTES</b>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {token ? (
                <Nav className='ml-auto'>
                  <Link to='/notes/active' style={{ textDecoration: 'none' }}>
                    <Button variant='warning' className='m-2'>
                      <b className='grey-text'>NOTATKI</b>
                    </Button>
                  </Link>
                  <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button variant='warning' className='m-2' onClick={this.logout}>
                      <b className='grey-text'>WYLOGUJ</b>
                    </Button>
                  </Link>
                </Nav>
              ) : (
                  <Nav className='ml-auto'>
                    <Link to='/login' style={{ textDecoration: 'none' }} >
                      <Button variant='warning' className='m-2'>
                        <b className='grey-text'>LOGOWANIE</b>
                      </Button>
                    </Link>
                    <Link to='/register' style={{ textDecoration: 'none' }} >
                      <Button variant='warning' className='m-2'>
                        <b className='grey-text'>REJESTRACJA</b>
                      </Button>
                    </Link>
                  </Nav>
                )
              }
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/notes/active" key='active'>
            <NotesSite noteStatus='ACTIVE'></NotesSite>
          </Route>
          <Route path="/notes/archived" key='archived'>
            <NotesSite noteStatus='ARCHIVED'></NotesSite>
          </Route>
          <Route path="/notes/deleted" key='deleted'>
            <NotesSite noteStatus='DELETED'></NotesSite>
          </Route>
          <Route path="/notes/:id" component={NoteSite} />
          <Route path='/register' component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
