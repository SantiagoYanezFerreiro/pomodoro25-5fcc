import React, { useState } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 1;
    if (breakLength < 0) {
      setBreakLength(8);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLength = () => {
    setBreakLength(breakLength + 1);
  };

  const decrementSessionLength = () => {
    const newSessionLengthInMinutes = sessionLength - 60;
    if (sessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLengthInMinutes);
    }
  };

  const incrementSessionLength = () => {
    const newSessionLengthInMinutes = sessionLength + 60;
    if (sessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLengthInMinutes);
    }
  };

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decrementBreakLength={decrementBreakLength}
        incrementBreakLength={incrementBreakLength}
      />
      <Session
        sessionLength={sessionLength}
        decrementSessionLength={decrementSessionLength}
        incrementSessionLength={incrementSessionLength}
      />
      <TimeLeft />
      <p id="break-label">Break</p>
    </div>
  );
}

export default App;
