import React from "react";
import  '../styles/grid.scss'; 

export default function Item({
  header = "hey",
  color = "blue",
  clicked,
  handle,
  image,
  imageBackgroundId
}) {

  const imageBackgroundIdName = 'id' + imageBackgroundId;

  return (
    
    <div
      className="col-4"
      onClick={() => handle(header)}
      style={clicked ? { opacity: '.3' } : null}
    >
      <div 
      id={imageBackgroundIdName}
      className="square" 
      >
      {header} 
      </div>
    </div>
  );
}

