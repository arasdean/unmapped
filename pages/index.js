import React, { Component } from 'react'
import styled from "styled-components";
import InfoSection from '../components/InfoSection';
import LocationSection from '../components/LocationSection';
import HeroSection from '../components/HeroSection';
import GuidesSection from '../components/GuidesSection';

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroSection />
        <InfoSection />
        <LocationSection />
        <GuidesSection />
      </React.Fragment>
    )
  }
};


let Div = styled.div`
  background-image: url('/static/architecture-buildings-business-325185-p-2600.jpeg');
  width: 100%;
  background-size: cover;
  height: 100vh;
`
