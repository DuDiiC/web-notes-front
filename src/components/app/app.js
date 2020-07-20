import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import Register from '../forms/register';
import Login from '../forms/login';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path='/register' component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
