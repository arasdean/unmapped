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
    "bioSample": "Paul, in addition to being a highly sought-after tour guide, is a San Francisco native, a professional actor, and world traveler, who has spent time in many countries around the world. ",
    "bio": "Having worked for years in the local tech industry, for companies like Lucasfilm and Ubisoft, Paul shifted his career toreally leverage his strengths, and began using his perfomance and research skills to create comprehensive tours of the San Francisco Bay Area, featuring a mix of attractions, ranging from the \"Must-see\" (Golden Gate Bridge, Chinatown, the Haight-Ashbury District, etc) to the obscure well-kept secret locales: best local dives, best used bookstore,  best dim sum in SF (hint: it's *not* in Chinatown).  When not in SF, Paul can be found working in Shakepeare theatres around the world, having performed in venues like Shakesopeare’s Globe in London, The Pop-up Globe in Auckland New Zealand, and, recently, the streets of Seoul, Korea!"

  },
  {
    "name": "Obaida Albaroudi",
    "languages": "Arabic, English, Basic Spanish",
    "url": "https://i.imgur.com/pNnZ7Mv.jpg",
    "gender": "Male",
    "bioSample": "Obaida is an avid basketball fan as well as a big time foodie. He not only has a list of the top restaurants in SF/Bay Area but also across the world.",
    "bio": "He is in touch with the corporate world in SF and can help plan visits across the different companies in the area while also talking to the culture of SF. If you are looking to better understand the food scene and the overall culture of SF and the bay area he is the go to person."
  },
  {
    "name": "Evonnie Lovely Contreras",
    "languages": "French, German and English",
    "url": "https://i.imgur.com/hdW2t7M.jpg",
    "gender": "Female",
    "bioSample": "A funny, outgoing and mature SF native who can show you every nook and cranny of SF. Big foodie and artsy hipster."
  },
  {
    "name": "Jesse Parker",
    "languages": "English",
    "url": "https://i.imgur.com/vun72r2.jpg",
    "gender": "Male",
    "bioSample": "Jesse Parker is a Gay 26-year-old Bay Area native. He studies art history",
    "bio": "and visual culture in Berkeley and was an art framer for a time. As a result, he has become a purveyor of the art scenes in San Francisco and greater bay area. Although he lives in Oakland he loves to get lost in San Francisco whenever the opportunity arises finding new restaurants, cafés, parks to hike and places to hang out."
  },
  {
    "name": "Hossain",
    "languages": "English, Arabic",
    "url": "https://i.imgur.com/NfJjup1.jpg",
    "gender": "Male",
    "bioSample": "I am a 26 year-old born and raised Bay Area native that loves sports (Go Dubs!),",
    "bio": "music and learning new things. The Bay is a rich historical and cultural that is at a unique inflection point - the tradition of the area is merging with the the most forward-looking industry in the world: tech. I think that's fascinating and is one of the primary reasons I love living here!"
  },
  {
    "name": "Raj Khanna",
    "languages": "English, Hindi",
    "url": "https://i.imgur.com/DMgCGoI.jpg",
    "gender": "Male",
    "bioSample": "Raj is a lover of the natural life, and the bay area is an indulgent place.", 
    "bio": "He is an avid hiker and actively seeks out unique places and stunning natural vistas in SF, East Bay (Berkeley, Oakland) and the North Bay counties. He spends a lot of his recreational hours with friends visiting the many local breweries, wineries and artisinal farms."
  },
  {
    "name": "Sara Goldberg",
    "languages": "Spanish, Portuguese, English",
    "url": "https://i.imgur.com/E2VeVtf.jpg",
    "gender": "female",
    "bioSample": "I'm a traveler at heart, whether it's abroad or at home. I've been living in the Bay for 4 years. I love exploring",
    "bio": "and finding new places to enjoy food, the arts, culture and nature. I also love going back to places that are special to me. I especially love meeting international travelers! I teach ESL and we can definitely practice English alongside touring and adventuring through SF. I look forward to meeting you!"
  },
  {
    "name": "Adam Ringel",
    "languages": "English",
    "url": "https://i.imgur.com/34IOU0k.jpg",
    "gender": "male",
    "bioSample": "Adam is a history buff who enjoys sharing his extensive knowledge of San Francisco's fascinating history and culture",
    "bio": "with others. If you enjoy history, art, science, local cuisine and beer Adam will give you an unforgettable taste of San Francisco."
  },
  {
    "name": "Raphael Mauro",
    "languages": "English and French",
    "url": "https://i.imgur.com/OEejpQA.jpg",
    "gender": "male",
    "bioSample": "A native San Franciscan, I was raised in the Dogpatch, a working-class industrial neighborhood. I attended the French-American International",
    "bio": "School from Pre-K through High School. I later went on to receive my B.A. in International Relations from San Francisco State University and was fortunate enough to work for one of our City legislators. In my life in San Francisco I have been able to learn and take in all the wonderful and diverse cultures, sights, sounds, and tastes the City and region have to offer and I’ve always been eager to share my knowledge with friends and family visiting from abroad. Using my knowledge I’ve acquired growing up here, I hope to show every visitor what makes this a truly special place."
  },
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
          <Button onClick={this.back}>Back</Button>
        </div>
        <div className='guides-grid'>
          {data.map(guide => <Card guide={guide} save={this.saveAndContinue} />)}
        </div>
      </React.Fragment>
    )
  }
}

export default Guides;