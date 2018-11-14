import React, { Component } from 'react'
import styled from "styled-components";
import Layout from '../components/Layout';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSection';

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroSection />
        <InfoSection />
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
