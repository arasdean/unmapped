import React, { Component } from "react";
import Interests from "./Interests";
import FormLayout from '../pages/FormLayout';
import Guides from "./Guides";
import Summary from '../pages/Summary'; 

import Success from "./Success";

class MainForm extends Component {
  state = {
    step: 1,
    guide: null, 
    interests: null,
    number: "",
    email: "",
    name: '', 
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

  genericHandler = (f, v) => {
    this.setState({ [f]: v });
  }

  guideHandler = (guide) => {
    this.setState({guide: guide})
  }

  render() {
    const { step } = this.state;
    const { interests, guide } = this.state;
    const { d, groupSize, price } = this.props.location.state;
    const values = { interests, d, groupSize, guide};
    switch (step) {
      case 1:
        return (
          <FormLayout>
            <Interests
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.genericHandler}
              values={values}
              date={d}
            />
          </FormLayout>
        );
      case 2:
        return (
          <FormLayout>
            <Guides
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.guideHandler}
              values={values}
            />
          </FormLayout>
        );
      case 3:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={{values: values, ...this.props.location.state}}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default MainForm;
