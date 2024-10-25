import React, { useState } from 'react'
import './about.css'
import aboutProfile from '../assets/profile-image-about.avif'
function About() {
  return (
    <div className='about'>
            <img src={aboutProfile} alt="" className={`dashBoardImage`}/>
            <div className={`about-content`}>
                  <span style={{fontSize:"2.5rem",fontWeight:"600"}}>Myself,</span>
                  <p style={{fontSize:"22px"}}>
                      I'm Sanju , an aspiring engineering student pursuing Btech at Model Engineering College and highly enthusiastic about coding and learning new Technologies.
                  </p>
            </div>
    </div>
  )
}

export default About