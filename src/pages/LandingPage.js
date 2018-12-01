import React from 'react';
import HeroSection from '../components/HeroSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';

const LandingPage = () => (
    <div>
            <HeroSection />
            <InfoSection />
            <LocationSection />
            <Footer />
    </div>
);

export default LandingPage;