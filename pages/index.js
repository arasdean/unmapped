import React, { Component } from 'react'
import Layout from '../components/Layout';
import InfoSection from '../components/InfoSection';

export default class extends Component {
  render() {
    return (
      <div>
        <Layout>
          <main>
            <h1>Unmapped. </h1>
            <InfoSection />
          </main>
        </Layout>
      </div>
    )
  }
}; 