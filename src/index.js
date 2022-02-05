import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { authService } from "fbase";
import "./styles.css";
// console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
