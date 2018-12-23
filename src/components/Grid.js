import React from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../styles/pages.scss';
import Item from "./Item";



export default class Grid extends React.Component {
  
  render() {
    const { clickedState } = this.props;
    return (
      <div>

        <div className='grid-wrapper'>
          <div className='grid'>
            {this.props.data.map(row => (
                [0, 1, 2].map((num) => (
                <div className='row2'>
                <Item
                  key={row[num].key}
                  header={row[num].name}
                  handle={this.props.handler}
                  clicked={clickedState[row[num].name]}
                />
                </div>
               ))
            ))}

            <br />
            <br />
            
            <div className='row' style={{display: 'flex', justifyContent: 'center'}}> 
               <Button onClick={this.props.save}> Next </Button>
             </div>

            <br />
            <br />

            </div>
        </div>
      </div>
    );
  }
}
