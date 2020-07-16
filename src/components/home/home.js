import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import './home.css';

function Home() {
    return (
        <div className="App">
            <Navigation />
            <Link to='/login'>
                Login
            </Link>
            <Link to='/register'>
                Register
            </Link>
        </div>
    );
}

export default Home;