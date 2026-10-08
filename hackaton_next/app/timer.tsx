'use client';

import { useState, useRef } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

function start() {
  if (!interval.current) {
    interval.current = setInterval(() => setSeconds((s) => s + 1), 1000);
  }
}

  function stop() {
    if (interval.current) clearInterval(interval.current);
    interval.current = null;
  }

  function reset() {
    stop();
    setSeconds(0);
  }

  return (
    <div>
      <h1>Timer</h1>
      <p>{Math.floor(seconds / 60)} mins {seconds % 60} secs</p>
      <button onClick={start} style={{ background: 'green' }}>Start</button>
      <button onClick={stop} style={{ background: 'red' }}>Stop</button>
      <button onClick={reset} style={{ background: 'yellow', color: 'black' }}>Reset</button>
    </div>
  );
}