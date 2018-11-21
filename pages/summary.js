import TravelSummary from "../components/TravelSummary";

export default class summary extends React.Component {
    state = {
        tourists: 3,
        location: 'San Francisco, CA',
        dates: 'December 11th, 2018 - December 14th, 2018',
        hobbies: ['basketball', 'bridges', 'waterparks'],
        total: 150,
    }

    componentDidMount() {

    }

    render() {
        return (
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
        );
    }
}