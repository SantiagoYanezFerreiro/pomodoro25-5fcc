import { useState } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Break />
      <Session />
      <TimeLeft />
      <p id="break-label">Break</p>
    </div>
  );
}

export default App;
