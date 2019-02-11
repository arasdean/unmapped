import React from 'react';
import '../styles/_how.scss';

const VisionSection = () => (
    <div className="vision-section" id="vision">
        <div className='vision'>
            <h3> Vision </h3>
            <p>
                We believe that travel is necessary for learning, growing, and understanding.
                Our goal is to curate trips that give tourists the opportunity to experience instead of tour.
                To travel to new places in a way that creates bonds and life-long connections with the land and the people that are native.To ultimately create unforgettable memories that are forever
                cherished while also empowering local economies and communities.
    <br />
                Create a world of understanding through travel!
        </p>
            <div class='video-section'> 
                <iframe class='video'
                    src="https://www.youtube.com/embed/Y4WHA4AH6I8">
                </iframe>
                <iframe class='video'
                    src="https://www.youtube.com/embed/pXuK00Gf59I">
                </iframe>
            </div>
        </div>
    </div>
);

export default VisionSection; 