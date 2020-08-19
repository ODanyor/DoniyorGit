import React, { useState, createContext } from 'react'

export const Context = createContext()

export const Provider = (props) => {
  const [data, setData] = useState({
    menu: false,
    darkMode: false,
    text:
      'My name is Doniyor. I am a fullstack software engineer. I am used to be sticked to my plans and trying to complete all given to me tasks on the time with clean, optimized code. I am not expansive, I just love to socialize. In my spare time I read, study for languages, watch social media and skate🏂. Please, check out my projects or my github. Take care and have a nice day',
  })
  return (
    <Context.Provider value={[data, setData]}>
      {props.children}
    </Context.Provider>
  )
}
