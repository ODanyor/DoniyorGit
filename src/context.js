import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = props => {
  const [data, setData] = useState({
    menu: false,
    darkMode: false,
    text:
      "My name is Doniyor or you can call me Dany for short. I am fullstack web developer in Tashkent city, Uzbekistan. I am using React, Redux, Nodejs, Express, Next-js, Gatsby, Webpack and Python. For databases I prefer Firebase Cloud Firestore and MongoDB."
  });
  return (
    <Context.Provider value={[data, setData]}>
      {props.children}
    </Context.Provider>
  );
};
