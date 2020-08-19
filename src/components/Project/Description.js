import React from 'react'
import './Description.css'
const github = require('../../static/images/github.png')

const Description = ({ description }) => {
  const { title, content, githubLink } = description
  return (
    <div className='description-container'>
      <h1>{title}</h1>
      <p>{content}</p>
      {githubLink && (
        <a rel='noopener noreferrer' target='_blank' href={githubLink}>
          <img alt='GitHub' src={github} width='25px' height='25px' />
          SourceCode
        </a>
      )}
    </div>
  )
}

export default Description
