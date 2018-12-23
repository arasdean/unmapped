import React from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../styles/pages.scss';
import Item from "./Item";



export default class Grid extends React.Component {
  state = {
    isMobile: null
  }

  componentDidMount() {
    this.setState({
            isMobile: window.innerWidth < 435
        });
  }


  render() {
    const { clickedState } = this.props;
    const { isMobile } = this.state;
    console.log("mobile", this.state.isMobile);
    return (
      <div>

        <div className={isMobile ? 'grid-mobile-wrapper' : 'grid-wrapper'}>
          <div className={isMobile ? 'grid-mobile' : 'grid'}>
            {this.props.data.map(row => (
              <div className={isMobile ? 'grid-row' : 'row'}>
                {[0, 1, 2].map((num) => <Item
                  key={row[num].key}
                  header={row[num].name}
                  handle={this.props.handler}
                  clicked={clickedState[row[num].name]}
                />
               )}
              </div>
            ))}
            </div>
        </div>

            <div className='row' style={{display: 'flex', justifyContent: 'center'}}> 
               <Button onClick={this.props.save}> Next </Button>
             </div>

      </div>
    );
  }
}
