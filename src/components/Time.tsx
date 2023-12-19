import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const dateObject = new Date();

      const hour =
        dateObject.getHours() < 10
          ? `0${dateObject.getHours()}`
          : dateObject.getHours();
      const minute =
        dateObject.getMinutes() < 10
          ? `0${dateObject.getMinutes()}`
          : dateObject.getMinutes();
      const seconds =
        dateObject.getSeconds() < 10
          ? `0${dateObject.getSeconds()}`
          : dateObject.getSeconds();

      const currentTime = `${hour}:${minute}:${seconds}`;

      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default Time;
