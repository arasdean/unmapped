import React from 'react';

const TravelSummary = ({data, handleChange}) => (
    <div>
        <div className="summary-text"><b>Number of tourists</b></div>
        <div className="summary-text">{data.groupSize}</div>
        <div className="summary-text"><b>Origin of the trip</b></div>
        <div className="summary-text">{'San Francisco'}</div>
        <div className="summary-text"><b>Dates of the trip</b> </div>
        <div className="summary-text">{data.d}</div>
        <div className="summary-text"><b>Start time: </b> </div>
        <div className="summary-text">{data.start}</div>
        <div className="summary-text"><b>End time: </b> </div>
        <div className="summary-text">{data.end}</div>
        <div className="summary-text"><b>List of hobbies</b></div>
        <div className="summary-text">{'Sports, Entertainment, Food and Drink'}</div>
        <div className="summary-text"><b>Tour Guide</b></div>
        <div className="summary-text">{data.values.guide}</div>
        <div className="gray-line"></div>
        <div className="pricing-container">
            <div className="summary-total"></div>
            <div className="summary-total">{'$' + data.price}</div>
        </div>
    </div>
);

export default TravelSummary;