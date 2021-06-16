import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import DemoComponent from "./DemoComponent";

import * as serviceWorker from "./serviceWorker";
// import Avtar from "./Avtar_old";
//import Avtar from "./Avtar";

/* Method once to pass props name work */
/*
ReactDOM.render(
  <React.StrictMode>
    <Avtar id="1" name="Sunil Verma" work="Web Developer" />
    <Avtar id="" name="Ashish Kumar" work="Frontend Developer" />
    <Avtar id="" name="Nitin Kumar" work="Database" />
    <Avtar id="" name="Robin sharma" work="UX/UI Developer" />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

/* Method to pass by Array */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
