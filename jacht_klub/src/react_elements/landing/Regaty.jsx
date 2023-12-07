import React, { useState, useEffect } from 'react';
import "../../styles/index.css";

function Timer({ type, time }) {
  const formattedTime = time < 10 ? `0${time}` : time;

  const timerStyle = {
    color: 'white',
    fontSize: '5em', 
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
<div id="regaty" className='center-screen text-center '>
    <h1 className='text-white text-6xl mb-4 mt-80'>Następne regaty</h1>
    <div className="text-overlay flex space-x-4 mb-4 ">
      <Timer type="hours" time={time.hours} />
      <div className="separator" style={{ color: "white", fontSize: "4em" }}>:</div>
      <Timer type="minutes" time={time.minutes} />
      <div className="separator" style={{ color: "white", fontSize: "4em" }}>:</div>
      <Timer type="seconds" time={time.seconds} />
    </div>
    <a href="../../src/html/regaty.html" className="bg-yellow rounded-lg px-4 py-2 text-black">
      Dowiedz się więcej!
    </a>
  </div>
);
}

export default Regaty;

//zrobic tego style tak jak tutaj https://frontendin.com/css-wave-text-effects/ sa juz w index.css jakies ale nie działa mi musze pokombinowac 
// po naciśnieciu dowiec się więcej przenosi do strony z mapa i formularzem regat