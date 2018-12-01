import React from 'react';

const TravelSummary = ({data, handleChange}) => (
    <div>
        <div className="summary-text">Number of tourists</div>
        <div className="summary-text">{data.groupSize}</div>
        <div className="summary-text">Origin of the trip</div>
        <div className="summary-text">{'San Francisco'}</div>
        <div className="summary-text">Dates of the trip</div>
        <div className="summary-text">{data.d}</div>
        <div className="summary-text">List of hobbies</div>
        <div className="summary-text">{data.interests}</div>
        <div className="summary-text">Tour Guide</div>
        <div className="summary-text">{data.guide}</div>
        <div className="gray-line"></div>
        <div className="pricing-container">
            <div className="summary-text">Fees & taxes</div>
            <div className="summary-text">$10</div>
        </div>
        <div className="pricing-container">
            <div className="summary-total"></div>
            <div className="summary-total">{data.price}</div>
        </div>
    </div>
);

export default TravelSummary;