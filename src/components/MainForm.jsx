import React, { Component } from "react";
import { Redirect } from 'react-router'; 
import axios from 'axios'; 
import Interests from "./Interests";
import FormLayout from '../pages/FormLayout';
import Guides from "./Guides";
import Summary from '../pages/Summary'; 
import Success from "./Success";
 


class MainForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      guide: null, 
      interests: null,
      number: "",
      email: "",
      name: '', 
      referral: null, 
      extra: '', 
      contactPref: 'Email',
    };
  
  }

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

  submit = (values) => {
    // this.nextStep();
    const {d, groupSize, price, start, end} = values;  
    const { name, email, guide, interests, contactPref, referral, extra} = this.state; 
    const finalData = {price, start, end, groupSize, interests, d, guide, referral, contactPref, extra} 
    axios.post('https://few3sktvhi.execute-api.us-east-1.amazonaws.com/v1/', {
      name: name, 
      email: email,
      message: finalData, 
    })
    .then(function (response) {
      console.log(response.status); 
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
    if(typeof this.props.location.state === 'undefined') {
      return <Redirect to='/' />
    }
    const { step } = this.state;
    const { interests, guide, contactPref } = this.state;
    const { d } = this.props.location.state;
    const values = { interests, guide, contactPref};

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
            submit={this.submit}
            values={{values: values, ...this.props.location.state}}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default MainForm;
