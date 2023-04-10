import React, { useState } from "react";
const Session = ({
  sessionLength,
  decrementSessionLength,
  incrementSessionLength,
}) => {
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return minutes < 10
      ? "0" + minutes
      : minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };

  return (
    <div id="session-label time-sets">
      <p>Session Length</p>
      <button id="session-increment" onClick={incrementSessionLength}>
        +
      </button>
      <button id="session-decrement" onClick={decrementSessionLength}>
        -
      </button>
      <p id="session-length">{formatTime(sessionLength)}</p>
    </div>
  );
};
export default Session;
