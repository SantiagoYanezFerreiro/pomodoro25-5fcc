import React from "react";

const Break = ({ breakLength, decrementBreakLength, incrementBreakLength }) => {
  return (
    <>
      <p>BreakLabel</p>
      <div className="time-sets">
        <button id="break-decrement" onClick={decrementBreakLength}>
          -
        </button>
        <p id="break-length">{breakLength}</p>
        <button id="break-increment" onClick={incrementBreakLength}>
          +
        </button>
      </div>
    </>
  );
};

export default Break;
