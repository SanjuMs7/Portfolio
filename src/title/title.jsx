import React from 'react'
import './title.css'
function Title({heading,subheading}) {
  return (
    <div className='title'>
      <span className='main-heading'>{heading}</span>
      <span className='bold-heading'>{subheading}</span>
    </div>
  )
}

export default Title