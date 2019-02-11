import React from 'react';
import '../styles/_guides.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seeMore: false, 
        }
    }

    displayBio = () => {
        console.log('clicked')
        this.setState({seeMore: !this.state.seeMore})
    };

    render() {
        const { guide = { name: 'hi', location: 'lol', bio: 'hm', url: null } } = this.props;
        const { name, location, bio, bioSample, url, languages } = guide;
        return (
            <div class="team3-profile-card">
                <img className="team3-avatar" src={url} />
                <div className="team3-content">
                    <h2 class="team3-name">{name}</h2>
                    <p style={{fontSize: 9, color: '#333'}}> Languages: {languages} </p> 
                    <div class="tagline team3-position">{location}</div>
                    <p>{bioSample} {this.state.seeMore ? bio : '...'}</p>
                    <a style={{ color: 'blue'}} onClick={this.displayBio}>{this.state.seeMore ? 'See Less' : 'See More'}</a>
                </div>
                <div className="team3-buttons-wrap"><a href="#" class="btn team3-left-button w-button" onClick={(e) => this.props.save(e, name)}>Connect</a></div>
            </div>
        )
    }

} 