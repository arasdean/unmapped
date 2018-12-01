import React from 'react';
import {Input} from 'antd'; 
import TravelSummary from "../components/TravelSummary";
import Layout from "../components/Layout";

export default class Summary extends React.Component {

    render() {
        return (
            <Layout type='form'>
                <h1 className="header">Personal Information</h1>
                <div className="dashboard">
                    <div className="dashboard-left">
                        <div className="col personal-info">
                            <div className="contact-header">Contact Data</div>
                            <div className="email-form">
                                <input id="email" onChange={this.props.handleChange('email')} className="contact-input" type="email" placeholder="Email Address" />
                                <input id="number" onChange={this.props.handleChange('number')}   className="contact-input" type="text" placeholder="Phone Number" />
                            </div>
                            <div className='email-form'> 
                                <input id="name" onChange={this.props.handleChange('name')} className="contact-input" type="name" placeholder="name" />
                            </div>
                            {/* <input id="confirmMail" className="contact-input" type="email" placeholder="Confirm Email Address" />  */}
                        </div>
                        <button className="submit-button">LET'S GO</button>
                    </div>
                    <div className="col summary">
                        <TravelSummary data={this.props.values} />
                    </div>
                </div>
            </Layout>
        );
    }
}