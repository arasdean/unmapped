import React, { Component } from "react";
import UserDetails from "./UserDetails";
import FormLayout from '../pages/FormLayout';
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class MainForm extends Component {
  state = {
    step: 1,
    guide: null, 
    interests: null,
    lastName: "",
    email: "",
    age: "",
    city: "",
    country: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  testHandler = (f, v) => {
    console.log('here');
    this.setState({ [f]: v });
  }

  guideHandler = (guide) => {
    this.setState({guide: guide})
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, city, country, interests } = this.state;
    const values = { interests };
    const { d } = this.props.location.state;
    switch (step) {
      case 1:
        return (
          <FormLayout>
            <UserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.testHandler}
              values={values}
              date={d}
            />
          </FormLayout>
        );
      case 2:
        return (
          <FormLayout>
            <PersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.guideHandler}
              values={values}
            />
          </FormLayout>
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default MainForm;
