import React from 'react';

const TravelSummary = (props) => (
<<<<<<< HEAD
    <div className="summary">
        <div className="summary-header">TRIP SUMMARY</div>
        <div className="summary-section">
            <div className="summary-text subheader">Number of tourists</div>
            <div className="summary-text">x{props.data.tourists}</div>
        </div>
        <div className="summary-section">
            <div className="summary-text subheader">Origin of the trip</div>
            <div className="summary-text">{props.data.destination}</div>
        </div>
        <div className="summary-section">
            <div className="summary-text subheader">Dates of the trip</div>
            <div className="summary-text">{props.data.dates}</div>
        </div>
        <div className="summary-section">
            <div className="summary-text subheader">List of hobbies</div>
            {props.data.hobbies.map((hobby)=> <div className="summary-text">{hobby}</div>)}
        </div>
        <div className="gray-line"></div>
        <div className="pricing-container">
            <div className="summary-text fees">Fees & taxes</div>
            <div className="summary-text">$10</div>
        </div>
        <div className="pricing-container summary-section">
            <div className="summary-total">TOTAL</div>
            <div className="summary-total">${props.data.total}</div>
=======
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
>>>>>>> df260c9... Create summary page, and corresponding component
        </div>
    </div>
);

export default TravelSummary;