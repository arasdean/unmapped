import React, { Component } from 'react';
import { Form, Button } from 'antd';
import Grid from './Grid';
import 'antd/dist/antd.css';
import '../styles/pages.scss';
const FormItem = Form.Item;

const data = [
    [
      { name: "chicken", key: 0 },
      { name: "beef", key: 1 },
      { name: "tuna", key: 2 }
    ],
    [
      { name: "test", key: 3 },
      { name: "tset", key: 4 },
      { name: "sett", key: 5 }
    ],
    [{ name: "a", key: 6 }, { name: "b", key: 7 }, { name: "c", key: 8 }]
  ];
let initializedData ={};
data.flat(1).forEach((item) => {
    initializedData[item.name] = false; 
})
class UserDetails extends Component {
    state = {
        counter: 0,
        data: initializedData, 
      };
    handler = n => {
        let newState = { ...this.state.data };
        newState[n] = !this.state.data[n];
        const updatedCounter = newState[n]
            ? this.state.counter + 1
            : this.state.counter - 1;
        if (this.state.counter < 3 || !newState[n]) {
            this.setState({ data: newState, counter: updatedCounter });
        }
    };
    saveAndContinue = (e) => {
        e.preventDefault()
        const {data} = this.state;
        const interests = Object.keys(data).filter((i) => data[i]);
        this.props.handleChange('interests', interests); 
        this.props.nextStep(); 
    }

    render() {
        const { values } = this.props;
        return (
            <React.Fragment> 
               <Grid  data={data} handler={this.handler} clickedState={this.state.data}/> 
               <Button onClick={this.saveAndContinue}> Next </Button> 
            </React.Fragment>
           
        )
    }
}

export default UserDetails;