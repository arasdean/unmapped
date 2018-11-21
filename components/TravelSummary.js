import React from 'react';

const TravelSummary = (props) => (
    <div>
        <div className="summary-text">Number of tourists</div>
        <div className="summary-text">{props.data.tourists}</div>
        <div className="summary-text">Origin of the trip</div>
        <div className="summary-text">{props.data.destination}</div>
        <div className="summary-text">Dates of the trip</div>
        <div className="summary-text">{props.data.dates}</div>
        <div className="summary-text">List of hobbies</div>
        <div className="summary-text">{props.data.hobbies}</div>
        <div className="gray-line"></div>
        <div className="pricing-container">
            <div className="summary-text">Fees & taxes</div>
            <div className="summary-text">$10</div>
        </div>
        <div className="pricing-container">
            <div className="summary-total"></div>
            <div className="summary-total">{props.data.total}</div>
        </div>
    </div>
);

export default TravelSummary;