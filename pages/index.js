import React, { Component } from 'react'
import styled from "styled-components"; 
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';

export default class extends Component {
  render() {
    return (
      <div>
        <Div> 
         <Layout>
            <HeroSection />
        </Layout>
        </Div> 
      </div>
    )
  }
}; 


let Div = styled.div`
  background-image: url('/static/architecture-buildings-business-325185-p-2600.jpeg');
  width: 100%;
  background-size: cover;
  height: 100vh;
`
