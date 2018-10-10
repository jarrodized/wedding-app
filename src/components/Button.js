import React from "react";

const Button = (props) => (
  <a href={props.link}>
    <button 
      className={`btn-primary btn ${buttonName(props)}`}
      type="button">
      {/* {props.name && props.name.length > 0 ? (
        <p>{props.name}</p>
      ) : null} */}
      { buttonContent(props) }
    </button>
  </a>
)

function buttonContent(props) {
  if(props.hotelButton)
  {
    return (
      <div>
        <p>{props.name}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.phone}</p>
      </div>
    );
  }
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

function buttonName(props) {
  if(props.hotelButton) {
    return `btn-hotel`;
  }
  return '';
}

export default Button;