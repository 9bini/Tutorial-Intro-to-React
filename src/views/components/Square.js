import React from "react";


function Square(props) {
  let className = " square " + props.className;
  console.log(className);
    return (
      <button 
      className={className} 
      onClick={props.onClick}>
        {props.value}
      </button>
    );
} 

export default Square;