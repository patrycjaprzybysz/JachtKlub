import React, { useState, useEffect } from 'react';
import "../../styles/index.css";

function Timer({ type, time }) {
  const formattedTime = time < 10 ? `0${time}` : time;

  const timerStyle = {
    color: 'white',
    fontSize: '5em',
    fontFamily: 'font-jaldi',
  };

  return <div className={type} style={timerStyle}>{formattedTime}</div>;

}

function Regaty() {
  const targetDate = new Date('2024-01-01T00:00:00');
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTime({ hours, minutes, seconds });
      } else {
        
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
<div className='center-screen text-center w-full '>
  <h1 id="regaty" className='text-2xl text-center mt-72 opacity-5 '>.</h1>
      <h1    className='nastepne text-white text-6xl 2xl:text-8xl mb-4 mt-16 font-jaldi'>Następne regaty</h1>
    <div className=" text-overlay flex space-x-4 mb-4 2xl:text-2xl ">
      <Timer  type="hours" time={time.hours} />
      <div className="separator" style={{ color: "white", fontSize: "4em" }}>:</div>
      <Timer type="minutes" time={time.minutes} />
      <div className="separator" style={{ color: "white", fontSize: "4em" }}>:</div>
      <Timer type="seconds" time={time.seconds} />
    </div>
    <a href="../../src/html/regaty.html" className="bg-yellow rounded-lg px-4 py-2 text-black mt-8 text-xl font-jaldi">
  Dowiedz się więcej!
</a>
  </div>
);
}

export default Regaty;

