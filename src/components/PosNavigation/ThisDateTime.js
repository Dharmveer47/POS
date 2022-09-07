import React, { useState, useEffect } from "react";

export const ThisDateTime = () => {
  const [datestate, setDatestate] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      let todayDate = new Date();
      let arrDataTime = todayDate.toLocaleString().split(",");
      setDatestate(arrDataTime[1]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="pos__clock">{datestate}</div>;
};
