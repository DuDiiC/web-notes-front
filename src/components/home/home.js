import React from 'react';
import Navigation from './navigation/navigation';
import './home.css';
import HomeContent from './homeContent/homeContent';

function Home() {
    return (
        <div>
            <Navigation />
            <HomeContent />
        </div>
    );
}

export default Home;