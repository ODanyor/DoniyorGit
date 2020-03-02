import React from "react";
import "./Contacts.css";

const Contacts = ({ mode, contacts, form }) => {
  let style = "contacts-container";
  if (mode) {
    style = "contacts-container contacts-container-darkMode";
  }
  return (
    <div className={style}>
      {contacts}
      {form}
    </div>
  );
};

export default Contacts;
