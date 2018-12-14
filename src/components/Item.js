import React from "react";
import  '../styles/grid.scss'; 

export default function Item({
  header = "hey",
  color = "blue",
  clicked,
  handle,
}) {
  return (
    <div
      className="square"
      onClick={() => handle(header)}
      style={clicked ? { opacity: '.3' } : null}
    >
      {header}
    </div>
  );
}
