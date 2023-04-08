import moment from "moment";
import React, { useState } from "react";
export default function Break() {
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(5);

  const decrementBreakLengthInSeconds = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 1;
    if (breakLengthInSeconds < 0) {
      setBreakLengthInSeconds(8);
    } else {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };

  const incrementBreakLengthInSeconds = () => {
    setBreakLengthInSeconds(breakLengthInSeconds + 1);
  };

  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, "s")
    .minutes();

  return (
    <div>
      <p>BreakLabel</p>

      <button id="break-decrement" onClick={decrementBreakLengthInSeconds}>
        -
      </button>
      <button id="break-increment" onClick={incrementBreakLengthInSeconds}>
        +
      </button>
      <p id="break-length">{breakLengthInSeconds}</p>
    </div>
  );
}
