import TravelSummary from "../components/TravelSummary";
<<<<<<< HEAD
import Layout from "../components/Layout";
=======
>>>>>>> df260c9... Create summary page, and corresponding component

export default class summary extends React.Component {
    state = {
        tourists: 3,
<<<<<<< HEAD
        destination: 'San Francisco, CA',
=======
        location: 'San Francisco, CA',
>>>>>>> df260c9... Create summary page, and corresponding component
        dates: 'December 11th, 2018 - December 14th, 2018',
        hobbies: ['basketball', 'bridges', 'waterparks'],
        total: 150,
    }

    componentDidMount() {

    }

    render() {
        return (
<<<<<<< HEAD
            <Layout>
                <h1 className="header">Personal Information</h1>
                <div className="dashboard">
                    <div className="col personal-info">
                        <div className="contact-header">Contact Data</div>
                        <div className="email-form">
                            <input id="contactMail" className="contact-input" type="email" placeholder="Email Address" />
                            <input id="contactNumber" className="contact-input" type="text" placeholder="Phone Number" />
                        </div>
                        <input id="confirmMail" className="contact-input" type="email" placeholder="Confirm Email Address" /> 
                    </div>
                    <div className="col summary">
                        <TravelSummary data={Object.assign({}, this.state)} />
                    </div>
                </div>
            </Layout>

=======
            <div className="dashboard">
                <div className="col personal-info">
                    <h1 className="col-header">Personal Information</h1>
                    <div className="email-form">
                        <input id="contactMail" className="contact-form" type="email" placeholder="Email Address" />
                        <input id="confirmMail" className="contact-form" type="email" placeholder="Confirm Email Address" /> 
                    </div>
                    <input id="contactNumber" className="contact-form" type="text" placeholder="Phone Number" />
                </div>
                <div className="col summary">
                    <h1 className="col-header">Trip Summary</h1>
                    <TravelSummary data={Object.assign({}, this.state)} />
                </div>
            </div>
>>>>>>> df260c9... Create summary page, and corresponding component
        );
    }
}