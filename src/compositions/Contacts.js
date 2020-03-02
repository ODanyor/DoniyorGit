import React from "react";

const Contacts = props => {
  return (
    <div>
      {props.contacts}
      {props.form}
    </div>
  );
};

export default Contacts;
