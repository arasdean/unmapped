import React from "react";
import  '../styles/grid.scss'; 

export default function Item({
  header = "hey",
  color = "blue",
  clicked,
  handle,
  image
}) {
  return (
    
    <div
      className="col-4"
      onClick={() => handle(header)}
      style={clicked ? { opacity: '.3' } : null}
    >
      <div 
      className="square" 
      style={{ backgroundImage: `url(${image})` }}>
      {header}
      </div>
    </div>
  );
}
