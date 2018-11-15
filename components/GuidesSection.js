import React from 'react';
import '../styles/_guides.scss';

const GuidesSection = () => (
    <div class="info_section">
        <h1 class="heading-2">Your guides</h1>
        <div class="info_block">
            <div class="content4-items">
                <div class="team3-profiles-row">
                    <div class="_6-col">
                        <div class="team3-profile-card">
                            <div class="team3-avatar"></div>
                            <h2 class="team3-name">Jason Porter</h2>
                            <div class="tagline team3-position">San Francisco, CA</div>
                            <p>Baseball fan, risk-taker, band member, Mad Men fan and critical graphic designer. Making at the intersection of modernism and purpose to develop visual solutions that inform and persuade. I am 20 years old.</p>
                            <div class="team3-buttons-wrap"><a href="#" class="btn team3-left-button w-button">Send Message</a><a href="#" class="btn btn-outline-light w-button">View Profile</a></div>
                        </div>
                    </div>
                    <div class="_6-col _6-col-last">
                        <div class="team3-profile-card">
                            <div class="team3-avatar team3-avatar-image2"></div>
                            <h2 class="team3-name">Mary Ortega</h2>
                            <div class="tagline team3-position">Oakland, CA</div>
                            <p>Basketball fan, ninja, record lover, reclaimed wood collector and HTML &amp; CSS lover. Doing at the junction of modernism and intellectual purity to express ideas through design. I prefer clear logic to decoration.</p>
                            <div class="team3-buttons-wrap"><a href="#" class="btn team3-left-button w-button">Send Message</a><a href="#" class="btn btn-outline-light w-button">View Profile</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default GuidesSection; 