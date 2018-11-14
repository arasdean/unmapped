import React, { Component } from 'react'
import Layout from '../components/Layout';
import InfoSection from '../components/InfoSection';
import LocationSection from '../components/LocationSection';

export default class extends Component {
  render() {
    return (
      <div>
        <Layout>
          <main>
            <h1>Unmapped. </h1>
            <InfoSection />
            <LocationSection />
          </main>
        </Layout>
      </div>
    )
  }
}; 