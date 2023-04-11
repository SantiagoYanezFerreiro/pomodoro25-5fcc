import React, { useState } from "react";
const TimeLeft = ({ sessionLength, setSessionLength, setBreakLength }) => {
  const [timerOn, setTimerOn] = React.useState(false);
  const [timeLeft] = useState(sessionLength);
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return minutes < 10
      ? "0" + minutes
      : minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };
  const controlTime = () => {};
  const resetTime = () => {
    setSessionLength(25 * 60);
    setBreakLength(5);
  };
  return (
    <div>
      <p>Time Left Test</p>
      <p id="timer-label">"Session"</p>
      <p id="time-left">{formatTime(timeLeft)}</p>
      <button
        className="btn-large-functionalities"
        id="start_stop"
        onClick={controlTime}
      >
        {timerOn ? <i className="">pause</i> : <i className="">play</i>}
      </button>
      <button className="btn-reset" id="reset" onClick={resetTime}>
        <i className="">reset</i>
      </button>
    </div>
    /*time left function*/
  );
};
export default TimeLeft;
