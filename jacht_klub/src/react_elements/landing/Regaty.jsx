import React, { useState, useEffect } from 'react';
import "../../styles/index.css";

function Timer({ type, time }) {
  const formattedTime = time < 10 ? `0${time}` : time;

  return <div className={type}>{formattedTime}</div>;
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
    <div className='bg-navy w-full h-96 flex flex-col justify-center items-center'>
      <h1 className='text-white text-center text-3xl mb-4'>Następne regaty</h1>
      <div className="text-overlay flex space-x-4">
        <Timer type="hours" time={time.hours} />
        <div className="separator">:</div>
        <Timer type="minutes" time={time.minutes} />
        <div className="separator">:</div>
        <Timer type="seconds" time={time.seconds} />
      </div>
      <button className="bg-yellow rounded-lg px-4 py-2 text-black mt-4">
        Dowiedz się więcej!
      </button>
    </div>
  );
}

export default Regaty;

//zrobic tego style tak jak tutaj https://frontendin.com/css-wave-text-effects/ sa juz w index.css jakies ale nie działa mi musze pokombinowac 
// po naciśnieciu dowiec się więcej przenosi do strony z mapa i formularzem regat