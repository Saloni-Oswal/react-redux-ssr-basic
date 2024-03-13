import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ClockContainer = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(() => new Date().toLocaleTimeString());
    }, 1000);
  });
  return <Clock timer={timer}></Clock>;
};

const Clock = ({ timer }) =>
  ReactDOM.createPortal(
    <div>{timer}</div>,
    document.getElementById("clock-container")
  );

export default ClockContainer;
