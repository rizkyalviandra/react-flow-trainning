// @flow

import * as React from "react";

import logo from "./logo.svg";

import {
  Name,
  TickingClock,
  HandleEvent,
  OneWayDataBinding,
} from "./components";
import "./App.css";

const App = (): React.Element<*> => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Name name="World" />
        <TickingClock />
        <HandleEvent />
        <div style={{ height: "20px" }}></div>
        <div className="main-content">
          <OneWayDataBinding />
        </div>
      </header>
    </div>
  );
};

export default App;
