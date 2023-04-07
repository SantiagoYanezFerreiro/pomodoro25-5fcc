import React, { useState } from "react";
export default function Session() {
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <div id="session-label">
      <p>Session Length</p>
      <button id="session-increment"></button>
      <button id="session-decrement"></button>
      <p id="session-length">{sessionLength}</p>
    </div>
  );
}
