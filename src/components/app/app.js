import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../home/home';
import Register from '../register/register';
import Login from '../login/login';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path='/register' component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
