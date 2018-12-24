import React, { Component } from 'react';
import { Form, Button } from 'antd';
import Grid from './Grid';
import 'antd/dist/antd.css';
import '../styles/pages.scss';

const FormItem = Form.Item;

const data = [
    [
        { name: "Entertainment", image: "https://images.pexels.com/photos/69815/florida-state-university-westcott-building-auditorium-interior-69815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 0, },
        { name: "Food and Drinks", image: "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 1, },
        { name: "Adventure", image: "https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 2 }
    ],
    [
        { name: "History & Art", image: "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 3 },
        { name: "Culture", image: "https://images.pexels.com/photos/1115166/pexels-photo-1115166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 4, },
        { name: 'Events', image: "https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 5 }
    ],
    [
        { name: "Sightseeing", image: "https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 6 },
        { name: "Music", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 7 },
        { name: "Sports", image: "https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", key: 8 }
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