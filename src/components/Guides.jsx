import React, { Component } from 'react';
import { Button } from 'antd';
import Card from './Card';
import '../styles/_guides.scss';
// import { throws } from 'assert';

const data = [
    {
      "name": "Paul Jennings",
      "url": "https://i.imgur.com/fgxxyew.jpg",
      "languages": "English, Rudimentary French",
      "gender": "Male",
      "bio": "Paul, in addition to being a highly sought-after tour guide, is a San Francisco native, a professional actor, and world traveler, who has spent time in many countries around the world.  H"
    },
    {
      "name": "Obaida Albaroudi",
      "languages": "Arabic, English, Basic Spanish",
      "url": "https://i.imgur.com/Y7f7CMu.jpg",
      "gender": "Male",
      "bio": "Obaida is an avid basketball fan as well as a big time foodie. He not only has a list of the top restaurants in SF/Bay Area but also across the world."
    },
    {
      "name": "Evonnie Lovely Contreras",
      "languages": "French, German and English",
      "url": "https://i.imgur.com/YhvGW6H.jpg",
      "gender": "Female",
      "bio": "A funny, outgoing and mature SF native who can show you every nook and cranny of SF. Big foodie and artsy hipster."
    },
    {
      "name": "Jesse Parker",
      "languages": "English",
      "url": "https://images.unsplash.com/photo-1542838686-b08706f6f2d1?ixlib=rb-0.3.5&s=34973521d142d68c7c10b8c4a5c0ec4e&auto=format&fit=crop&w=668&q=80",
      "gender": "Male",
      "bio": "Jesse Parker is a Gay 26-year-old Bay Area native. He studies art history and visual culture in Berkeley and was an art framer for a time. As a result, he has become a purveyor of the art scenes in San Francisco and greater bay area. Although he lives in Oakland he loves to get lost in San Francisco whenever the opportunity arises finding new restaurants, cafés, parks to hike and places to hang out."
    },
    {
      "name": "Hossain",
      "languages": "English, Arabic",
      "url": "https://i.imgur.com/NfJjup1.jpg",
      "gender": "Male",
      "bio": "I am a 26 year-old born and raised Bay Area native that loves sports (Go Dubs!), music and learning new things. The Bay is a rich historical and cultural that is at a unique inflection point - the tradition of the area is merging with the the most forward-looking industry in the world: tech. I think that's fascinating and is one of the primary reasons I love living here!"
    },
    {
      "name": "Raj Khanna",
      "languages": "English, Hindi",
      "url": "https://i.imgur.com/DMgCGoI.jpg",
      "gender": "Male",
      "bio": "Raj is a lover of the natural life, and the bay area is an indulgent place. He is an avid hiker and actively seeks out unique places and stunning natural vistas in SF, East Bay (Berkeley, Oakland) and the North Bay counties. He spends a lot of his recreational hours with friends visiting the many local breweries, wineries and artisinal farms."
    }
  ]

class Guides extends Component {
    saveAndContinue = (e, name) => {
        e.preventDefault()
        this.props.handleChange(name);
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props
        return (
            <React.Fragment>
                <div className="guides-row"> 
                    <h1 classname="guides-header">Pick a guide</h1>
                </div>
                    <div className='guides-grid'>
                      {data.map(guide => <Card guide={guide} save={this.saveAndContinue} />)}
                    </div>
                  <Button onClick={this.back}>Back</Button>
            </React.Fragment>
        )
    }
}

export default Guides;