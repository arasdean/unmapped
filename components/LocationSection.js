import React from 'react';
import Link from 'next/link';

const LocationSection = () => (
    <div className="location-box">
        <h1 className="location-header">Explore New Places</h1>
        <div className="location-width-container">
            <div className="_2-col first-location">
                <div className="location-description">
                    <h1 className="location-subheader">San Francisco, CA</h1>
                </div>
            </div>
            <div className="_2-col second-location">
                <div className="location-description">
                    <h1 className="location-subheader">New York, NY</h1>
                    <Link href="/summary">
                        <a>Baton</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default LocationSection;