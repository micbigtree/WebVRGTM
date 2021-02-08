import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

function Overlay() {
  return (
    <>
      <App />
    </>
  );
}

ReactDOM.render(<Overlay />, document.getElementById("root"));
