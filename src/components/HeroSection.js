import React from 'react';
import NavBar from './NavBar';
import SearchBox from './SearchBox';
import '../styles/_hero.scss';

const prices = {
    '2-4': '$50', 
    '5-6': '$55', 
    '7-8': '$60'
}; 
export default class HeroSection extends React.Component {
    state = {
        d: null,
        groupSize: null,
        price: null, 
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
                        <h1 className="heading">A friend in every city.</h1>
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






