import { useEffect, useState } from "react";
// import styles from "./Timer.module.css";

// const Timer = () => {
//   const calculateTimeLeft = () => {
//     let year = new Date().getFullYear();
//     const difference = +new Date(`${year}-12-31`) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {interval}
//         {":"} {timeLeft[interval]}
//         {" ------ "}
//       </span>
//     );
//     console.log(timerComponents);
//   });
//   return (
//     <div className={styles.test}>
//       {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//     </div>
//   );
// };

// export default Timer;

const Timer = () => {
  const [time, setTime] = useState(2 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  return <div>{time}</div>;
};

export default Timer;
