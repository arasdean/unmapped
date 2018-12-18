import React from 'react';
import '../styles/_how.scss';

const HowSection = () => (
    <div className="info-section" id="how">
        <h1 className="info-section__main-header">
            Get an Experience Catered For You
        </h1>
        <div className='how-row'>
          <div className='how-col'> 
          <img src="https://img.icons8.com/wired/64/000000/user-location.png" />
          <br />
            <h3> FIND </h3> 
            <p> You choose the amount of people travelling to San Francisco as well as the time and date. Afterwards you will choose the interests that you have which will then take you to a page with a list of tour guides. </p>
          </div>
          <div className='how-col'> 
          <img src="https://img.icons8.com/wired/64/000000/handshake.png" />
            <br />
            <h3> CONNECT </h3> 
            <p> You will be matched with a group of guides based off of your common interests. You are then able to connect and engage with any of the guides to learn more about who they are and what they are about. Once you connect and fill out the relevant information we will put you in contact with the tour guides you choose (you can connect with more than one guide). </p>
          </div>
          <div className='how-col'> 
          <img src="https://img.icons8.com/wired/64/000000/refund.png" />
          <br />
            <h3> PAY </h3> 
            <p> After connecting with the tour guides you would like and confirming all the details you will be sent an invoice from stripe with the amount that is due. There will be extra charges if you would like a specific mode of transportation outside of walking (metro, vehicle, uber etc.). We do recommend tipping the locals at the end for the service they are providing! </p>
          </div>
        </div> 
    </div>
);

export default HowSection; 