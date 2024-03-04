import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const recordLap = () => {
    setLaps([...laps, (time)/1000]);
  };

  const resetStopwatch = () => {
    setTime(0);
    setLaps([]);
    setRunning(false);
  };


  console.log(time, "atime");


  return (
    <div>
      <div>
        <span>{"0" + Math.floor((time / 60000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span>{"0" + ((time / 10) % 100)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
        <button onClick={recordLap} disabled={!running}>
          Lap
        </button>
        <div>
          <h2>Lap Times:</h2>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>{lapTime}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Stopwatch;
