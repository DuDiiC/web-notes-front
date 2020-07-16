import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './home.css';

function Home() {
    return (
        <div className="App">
            <Navbar/>
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