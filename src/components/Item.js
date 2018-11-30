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
      className="item"
      onClick={() => handle(header)}
      style={clicked ? { background: color } : null}
    >
      {header}
    </div>
  );
}
