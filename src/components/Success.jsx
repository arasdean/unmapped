import React, { Component } from 'react';
import '../styles/confirmation.scss';
class Success extends Component {
    render() {
        return (
            <div className='confirmation'>
                <div className='confirm-container'>
                    <h2 className="header-centered">Thank you! Your tour has been booked.</h2>
                    <h3> We'll get to you shortly! </h3>

                    <a href='/' ><h3 style={{color: 'blue'}}>Click here to go to the home page </h3></a>
                </div>
            </div>
        )
    }
}

export default Success;