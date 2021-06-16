import React from "react";

// This is custom componsent in Backtick we can access any varaible using ${}

// here src is destructing
const Avtarlist = (props) => {
  return (
    <div className="cartInfo tc dib ma2 grow shadow-4">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt={props.name} />
      <h1 className="">{props.name}</h1>
      <p> {props.work}</p>
    </div>
  );
};

// We are exporting default as well custom "Avtarlist" component
export default Avtarlist;
