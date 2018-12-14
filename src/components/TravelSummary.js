import React from 'react';

const TravelSummary = ({data, handleChange}) => (
    <div>
        {console.log(data)}
        <div className="summary-text"><b>Number of tourists</b></div>
        <div className="summary-text">{data.groupSize}</div>
        <div className="summary-text"><b>Origin of the trip</b></div>
        <div className="summary-text">{'San Francisco'}</div>
        <div className="summary-text"><b>Dates of the trip</b> </div>
        <div className="summary-text">{data.d}</div>
        <div className="summary-text"><b>List of hobbies</b></div>
        <div className="summary-text">{'Sports, Entertainment, Food and Drink'}</div>
        <div className="summary-text"><b>Tour Guide</b></div>
        <div className="summary-text">{data.values.guide}</div>
        <div className="gray-line"></div>
        <div className="pricing-container">
            <div className="summary-text">Fees & taxes</div>
            <div className="summary-text">$10</div>
        </div>
        <div className="pricing-container">
            <div className="summary-total"></div>
            <div className="summary-total">{data.price + 10}</div>
        </div>
    </div>
);

export default TravelSummary;