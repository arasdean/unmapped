import React from "react";
import Item from "./Item";



export default class Grid extends React.Component {
  
  render() {
    const { clickedState } = this.props;
    return (
      <div className="grid">
        {this.props.data.map(row => (
          <div className="row">
            {[0, 1, 2].map((num) => <Item
              header={row[num].name}
              handle={this.props.handler}
              clicked={clickedState[row[num].name]}
            />
           )}
          </div>
        ))}
      </div>
    );
  }
}
