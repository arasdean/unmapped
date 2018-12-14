import React from 'react';
import NavBar from './NavBar';
import SearchBox from './SearchBox';
import '../styles/_hero.scss';


const prices = {
'1 Person → $35/hr': 35,
"2 People → $40/hr": 40,
"3 People → $45/hr": 45,
"4 People → $50/hr": 50,
"5 People → $55/hr": 55,
"6 People → $60/hr": 60,
"7 People → $65/hr": 65,
"8 People → $70/hr": 70,
"9 People → $75/hr": 75,

} 
export default class HeroSection extends React.Component {
    state = {
        d: null,
        groupSize: null,
        price: null, 
        time: null, 
    };
    dateChange = (value) => {
        this.setState({d: value.toString()})
     }
    groupChange = (value) => {
        this.setState({groupSize: value, price: prices[value]});
     }
     
   
    render() {
        // const props = { dateChange, groupChange, handleBlur, handleFocus, ...this.state }
        const testing = {...this.state}; 
        return (
            <div className="hero_section">
                <NavBar />
                <div className="hero_container">
                    <div className="hero_box">
                        <h1 style={{color: '#f5f5f5', fontWeight: 'bold'}}>A friend in every city.</h1>
                        <SearchBox dateChange={this.dateChange}
                            groupChange={this.groupChange}
                            test1={testing}
                            />
                    </div>
                </div>
            </div>
        )
    }
};






