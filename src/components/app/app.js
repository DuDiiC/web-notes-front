import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import Navigation from './Navigation';
import Register from '../forms/register';
import Login from '../forms/login';
import './app.css';

function App() {
  return (
    <Router>
      <div>

        <Navigation />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path='/register' component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
