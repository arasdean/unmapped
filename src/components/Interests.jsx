import React, { Component } from 'react';
import { Form, Button } from 'antd';
import Grid from './Grid';
import 'antd/dist/antd.css';
import '../styles/pages.scss';

const FormItem = Form.Item;

const data = [
    [
        { name: "Entertainment", key: 0, },
        { name: "Food and Drinks", key: 1, },
        { name: "Adventure", key: 2 }
    ],
    [
        { name: "History & Art", key: 3 },
        { name: "Culture", key: 4, },
        { name: 'Events', key: 5 }
    ],
    [
        { name: "Sightseeing", key: 6 },
        { name: "Music", key: 7 },
        { name: "Sports", key: 8 }
    ],
];
let initializedData = {};
data.flat(1).forEach((item) => {
    initializedData[item.name] = false;
})
class Interests extends Component {
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
        const { data } = this.state;
        const interests = Object.keys(data).filter((i) => data[i]);
        this.props.handleChange('interests', interests);
        this.props.nextStep();
    }

    render() {
        return (
            <div className='interest-container'>    
                <h1> Please choose up to three interests: </h1>
                <Grid data={data} save={this.saveAndContinue} handler={this.handler} clickedState={this.state.data} />
            </div>
        )
    }
}

export default Interests;