import React from 'react';
import '../styles/_guides.scss';

export default function Card(props) {
    const { guide = { name: 'hi', location: 'lol', bio: 'hm', url: null } } = props;
    const { name, location, bio, url } = guide;
    return (
        <div class="_6-col">
            <div class="team3-profile-card">
                <div className="team3-content-container">
                    <div className="team3-avatar-container">
                        <img className="team3-avatar" src={url} />
                    </div>
                    <div className="team3-content">
                        <h2 class="team3-name">{name}</h2>
                        <div class="tagline team3-position">{location}</div>
                        <p>{bio}</p>
                    </div>
                </div>
                <div class="team3-buttons-wrap"><a href="#" class="btn team3-left-button w-button" onClick={(e) => props.save(e, name)}>Connect</a></div>
            </div>
        </div>
    )
} 