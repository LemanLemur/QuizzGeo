import React from "react";
import ReactDOM from "react-dom";

import StartScreen from "./StartScreen";
import SinglePlayer from "./SinglePlayer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SinglePlayer />
  </React.StrictMode>,
  rootElement
);
