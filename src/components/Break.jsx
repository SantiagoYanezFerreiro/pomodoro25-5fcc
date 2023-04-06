import React, { useState } from "react";
export default function Break() {
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(5);
  return (
    <div>
      <p>Hello World Test</p>

      <button id="break-decrement"></button>
      <button id="break-increment"></button>
      <p id="break-length">{breakLengthInSeconds}</p>
    </div>
  );
}
