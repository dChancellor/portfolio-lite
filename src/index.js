import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import style from "./universals.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const setInitialTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.getElementById("root").classList.add("dark");
    return;
  }
  document.getElementById("root").classList.add("light");
};

setInitialTheme();
