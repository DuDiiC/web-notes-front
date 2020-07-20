import React from 'react';
import Navigation from './navigation/navigation';
import HomeContent from './homeContent/homeContent';
import HomeFooter from './homeFooter/homeFooter';
import './home.css';

function Home() {
    return (
        <div>
            <Navigation />
            <HomeContent />
            <HomeFooter />
        </div>
    );
}

export default Home;