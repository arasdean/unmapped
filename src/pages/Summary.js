import React from 'react';
import { Radio, Input} from 'antd';
import TravelSummary from "../components/TravelSummary";
import Layout from "../components/Layout";

const RadioGroup = Radio.Group; 
const { TextArea } = Input;

export default class Summary extends React.Component {

    render() {
        const { values, submit, handleChange } = this.props;
        return (
            <Layout type='form'>
                <h1 className="header">Personal Information</h1>
                <div className="dashboard">
                    <div className="dashboard-left">
                        <div className="col personal-info">
                            <div className="contact-header">About You</div>
                            <div className="email-form">
                                <input id="email" onChange={this.props.handleChange('email')} className="contact-input" type="email" placeholder="Email Address" />
                                <RadioGroup value={values.values.contactPref} onChange={handleChange('contactPref')} style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Preferred Contact: <br /> 
                                    {['Whatsapp', 'Email'].map((type) => <Radio value={type}> {type} </Radio> )} 
                                </RadioGroup> 
                            </div>
                            <div className='email-form'>
                                <input id="name" onChange={this.props.handleChange('name')} className="contact-input" type="name" placeholder="Full name" />
                                <input id="number" onChange={this.props.handleChange('number')} className="contact-input" type="text" placeholder="Phone Number" />
                            </div>
                            <div className='email-form'>
                                <input id="name" onChange={this.props.handleChange('name')} className="contact-input" type="name" placeholder="Referral Code (optional)" />
                            </div>
                             <button style={{ background: '#2cb066', marginTop: '30px' }} className="submit-button" onClick={() => submit(values)}>LET'S GO</button>
                        </div>

                    </div>
                    <div className="col summary">
                        <TravelSummary data={this.props.values}/>
                        <br /> 
                        <TextArea onChange={this.props.handleChange('extra')}  placeholder="Is there anything else you want us to know?"/> 
                    </div>
                </div>
            </Layout>
        );
    }
}