import React from 'react';

import '../styles/timer.scss';

const Timer = ({ hours, minutes, seconds }) => {
  return (
    <div className="timer__container">
      {hours > 0 && <span>{hours} : </span>} <span>{minutes}</span> :{' '}
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
