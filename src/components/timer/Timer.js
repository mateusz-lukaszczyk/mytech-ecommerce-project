import { useEffect, useState } from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import styles from "./Timer.module.css";

export const Timer = () => {
  const [time, setTime] = useState(2 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));
    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  return (
    <div className={styles.timer}>
      <TfiAlarmClock className={styles.timer__icon} /> {getFormattedTime(time)}
    </div>
  );
};
