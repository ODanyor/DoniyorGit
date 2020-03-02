import React from "react";
import "./Notification.css";

const Notification = ({ client, mode, messageToNull }) => {
  const { message } = client;
  let style = "notification-container";
  if (mode) {
    style = "notification-container notification-container-darkMode";
  }
  if (message) {
    style = `${style} notification-container-show`;
  }
  const toggle = () => {
    messageToNull();
  };
  return (
    <div className={style}>
      <p>{message}</p>
      <div onClick={toggle}>X</div>
    </div>
  );
};

export default Notification;
