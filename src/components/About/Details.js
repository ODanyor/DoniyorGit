/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import './Details.css'
const logo = require('../../static/Logo.svg')

const Details = ({ context }) => {
  const [data] = context
  const { text } = data
  // eslint-disable-next-line
  const [emojis, setEmojis] = useState({
    light: ['🖖', '👋', '✋', '✊', '✨', '🤙'],
    dark: ['👹', '👺', '👾', '😈', '🤖', '🌚'],
  })
  let emojiStyle
  if (data.darkMode) {
    emojiStyle = emojis.dark
  } else {
    emojiStyle = emojis.light
  }
  let style = 'details-container'
  if (data.darkMode) {
    style = 'details-container details-container-darkMode'
  }
  const randomEmoji = emojiStyle[Math.floor(Math.random() * emojiStyle.length)]
  return (
    <div className={style}>
      <div className='logo-container'>
        <img alt='Logo' src={logo} />
      </div>
      <div className='detail-position'>Full stack web developer</div>
      <p className='p-greating'>Hello {randomEmoji}! Nice to see you here.</p>
      <p>{text}</p>
      <div className='email-container'>
        <span>Email: </span>
        <a target='_blank' href='https://doniyorgit@gmail.com'>
          doniyorgit@gmail.com
        </a>
      </div>
      <div className='links-container'>
        <a target='_blank' href='https://github.com/ODanyor'>
          GitHub
        </a>
        <a target='_blank' href='https://t.me/danyalready'>
          Telegram
        </a>
        <a
          href='https://drive.google.com/uc?export=download&id=1V5e2RWGgC9ZxZSMMDwhpgLiVL6h2CvYx'
          download
        >
          CV
        </a>
      </div>
    </div>
  )
}

export default Details
