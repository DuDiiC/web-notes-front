import React from 'react';
import LandingPageNavigation from './landingPageNavigation';
import LandingPageContent from './landingPageContent';
import LandingPageFooter from './landingPageFooter';

import './landingPage.css';

function LandingPage() {
    return (
        <div>
            <LandingPageNavigation />
            <LandingPageContent />
            <LandingPageFooter />
        </div>
    );
}

export default LandingPage;