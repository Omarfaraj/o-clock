import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
// import ''
import styles from './home.module.css';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <h1>{format(currentTime, 'hh:mm:ss a')}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Clock />
    </div>
  );
}
