import { useState, useEffect } from "react";

function PomodoroTimer() {
  const [status, setStatus] = useState("idle"); // idle | work | break
  const [timer, setTimer] = useState(25 * 60);  // in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && isRunning) {
      if (status === "work") {
        setStatus("break");
        setTimer(5 * 60);
      } else if (status === "break") {
        setStatus("work");
        setTimer(25 * 60);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timer, status]);

  const startTimer = () => {
    if (status === "idle") {
      setStatus("work");
      setTimer(25 * 60);
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setStatus("idle");
    setTimer(25 * 60);
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <h2>Status: {status}</h2>
      <h2>{formatTime(timer)}</h2>
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopTimer}>Stop</button>
      )}
    </div>
  );
}

export default PomodoroTimer;
