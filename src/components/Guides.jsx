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
      "bio": "Paul, a San Francisco native, professional actor, and world traveler, who has spent time in many countries around the world. Having worked for years in the local tech industry Paul shifted his career to leverage his strengths, and began using his performance and research skills to create comprehensive tours of the San Francisco Bay Area, featuring a mix of attractions, ranging from the “Must-see” (Golden Gate Bridge, Chinatown, etc) to the obscure well-kept secret locales: best local dives, best used bookstore, best dim sum in SF (hint: it’s *not* in Chinatown). When not in SF, Paul can be found working in Shakespeare theaters around the world (Shakespeare’s Globe in London, The Pop-up Globe in Auckland New Zealand, and, recently, the streets of Seoul, Korea)!"
    },
    {
      "name": "Obaida Albaroudi",
      "languages": "Arabic, English, Basic Spanish",
      "url": "https://i.imgur.com/Y7f7CMu.jpg",
      "gender": "Male",
      "bio": "Obaida is an avid basketball fan as well as a big time foodie. He not only has a list of the top restaurants in SF/Bay Area but also across the world. He is in touch with the corporate world in SF and can help plan visits across the different companies in the area while also talking to the culture of SF. If you are looking to better understand the food scene and the overall culture of SF and the bay area he is the go to person."
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
      "bio": "Jesse Parker is a Gay 26-year-old Bay Area native. He studies art history and visual culture in Berkeley and was an art framer for a time. As a result, he has become a purveyor of the art scenes in San Francisco and greater bay area. Although he lives in Oakland he loves to get lost in San Francisco whenever the opportunity arises finding new restaurants, cafés, parks to hike and places to hang out. When the mood strikes he has been known to take in the vibrant and varied night life that San Francisco has to offer. When time permits he loves to cook and host dinner parties for his friends."
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
      "bio": "Raj is a lover of the natural life, and the bay area is an indulgent place. He is an avid hiker and actively seeks out unique places and stunning natural vistas in SF, East Bay (Berkeley, Oakland) and the North Bay counties. He spends a lot of his recreational hours with friends visiting the many local breweries, wineries and artisinal farms (produce, cheeses etc.) that call this region home. When not eating, drinking and walking/hiking his way around town, Raj geeks out on the contemporary history and culture of San Francisco - from the 'Summer of Love' to the Beat Poets to the Black Panthers to Alice Water's local food movement."
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
            <div> 
                <div className='guides-grid'>
                <div classname='guides-row'> 
                    <h1 classname="guides-header">Pick a guide</h1>
                     <Button onClick={this.back}>Back</Button>
                </div>
                 {data.map(guide => <Card guide={guide} save={this.saveAndContinue} />)}
                </div>
                
            </div>
        )
    }
}

export default Guides;