import React from 'react';
import HeroSection from '../components/HeroSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import HowSection from '../components/HowSection.js';

const LandingPage = () => (
    <div>
            <HeroSection />
            <InfoSection />
            <HowSection /> 
            <LocationSection />
            <Footer />
    </div>
);

export default LandingPage;