import TravelSummary from "../components/TravelSummary";
import Layout from "../components/Layout";
import Router from 'next/router';

export default class summary extends React.Component {
    state = {
        tourists: 3,
        destination: 'San Francisco, CA',
        dates: 'December 11th, 2018 - December 14th, 2018',
        hobbies: ['basketball', 'bridges', 'waterparks'],
        total: 150,
    }

    componentDidMount() {

    }

    render() {
        return (
            <Layout type='form'>
                <h1 className="header">Personal Information</h1>
                <div className="dashboard">
                    <div className="dashboard-left">
                        <div className="col personal-info">
                            <div className="contact-header">Contact Data</div>
                            <div className="email-form">
                                <input id="contactMail" className="contact-input" type="email" placeholder="Email Address" />
                                <input id="contactNumber" className="contact-input" type="text" placeholder="Phone Number" />
                            </div>
                            <input id="confirmMail" className="contact-input" type="email" placeholder="Confirm Email Address" /> 
                        </div>
                        <button onClick={() => {
                            Router.push('/')
                        }} className="submit-button">LET'S GO</button>
                    </div>
                    <div className="col summary">
                        <TravelSummary data={Object.assign({}, this.state)} />
                    </div>
                </div>
            </Layout>

        );
    }
}