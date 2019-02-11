import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import VisionSection from '../components/Vision';
import HowSection from '../components/HowSection.js';
import AboutUsSection from '../components/Aboutus';
import FAQSection from '../components/FAQ';
import StorySection from '../components/Story';

const LandingPage = () => (
    <div>
            <HeroSection />
            <HowSection /> 
            <AboutUsSection />
            <StorySection /> 
            <VisionSection />
            <InfoSection />
            <FAQSection /> 
            <Footer />
    </div>
);

export default LandingPage;