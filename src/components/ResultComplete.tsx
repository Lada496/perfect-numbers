import React from "react";
import { Link } from "react-router-dom";

const calcTime = (time: number, rem: number, unit: number) => {
  return (time - rem) / unit;
};

const createResult = (result: number) => {
  return result < 9 ? `${"0" + result}` : result;
};

const ResultComplete: React.FC<{ time: number }> = ({ time }) => {

  let finishHour: number = 0;
  let finishMinute: number = 0;
  let finishSecond: number = 0;

  if (time >= 3600) {
    let rem = time % 3600;
    const hour = calcTime(time, rem, 3600);
    finishHour = hour;
    rem = rem % 60;
    const min = calcTime(time, rem, 60);
    finishMinute = min;
    finishSecond = rem;
  } else if (time >= 60) {
    let rem = time % 60;
    const min = calcTime(time, rem, 60);
    finishMinute = min;
    finishSecond = rem;
  } else {
    finishSecond = time;
  }

  const resultHour = createResult(finishHour);
  const resultMinute = createResult(finishMinute);
  const resultSecond = createResult(finishSecond);

  return (
    <div className="result">
      <p>
        Congraturation!!
        <br />
        <span>
          Your time: {resultHour}:{resultMinute}:{resultSecond}
        </span>
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ResultComplete;
