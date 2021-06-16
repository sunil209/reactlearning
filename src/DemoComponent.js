import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./DemoComponent.css";

class DemoComponent extends Component {
  render() {
    return (
      <div className="parent_demo">
        <h1>Hello Demo Component {this.props.name} </h1>
        <p>Welcome to React world channel</p>
      </div>
    ); // JSX xml js in the form of js
  }
}

export default DemoComponent;
