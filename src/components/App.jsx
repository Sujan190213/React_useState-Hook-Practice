import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(now); // setTime(user defined) function returns new time

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    setTime(newTime); // returns new time
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <p>Sujan Dhali </p>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

// For getting time without AM / PM  >> Parameter as (it-IT) [Italian]
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp
