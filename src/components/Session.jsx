import React, { useState } from "react";
export default function Session() {
  const [sessionLength, setSessionLength] = useState(25 * 60);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return minutes < 10
      ? "0" + minutes
      : minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLengthInMinutes = sessionLength - 60;
    if (sessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLengthInMinutes);
    }
  };

  const incrementBreakLengthInSeconds = () => {
    const newSessionLengthInMinutes = sessionLength + 60;
    if (sessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLengthInMinutes);
    }
  };

  return (
    <div id="session-label">
      <p>Session Length</p>
      <button id="session-increment" onClick={incrementBreakLengthInSeconds}>
        +
      </button>
      <button
        id="session-decrement"
        onClick={decrementSessionLengthByOneMinute}
      >
        -
      </button>
      <p id="session-length">{formatTime(sessionLength)}</p>
    </div>
  );
}
