import React from 'react';
import HeroSection from '../components/HeroSection';
import GuidesSection from '../components/GuidesSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';

const LandingPage = () => (
    <div>
            <HeroSection />
            <InfoSection />
            <LocationSection />
            <GuidesSection />
            <Footer />
    </div>
);

export default LandingPage;