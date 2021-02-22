import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { register } from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

register();
