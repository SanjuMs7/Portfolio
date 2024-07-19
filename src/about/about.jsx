import React, { useState } from 'react'
import './about.css'
import aboutProfile from '../assets/profile-image-about.avif'
function About() {
  const [left,setLeft]=useState('');
  const [right,setRight]=useState('');
  const [flag,setFlag]=useState(false);
  window.addEventListener('scroll',()=>{
    if(innerHeight-scrollY > 471 && !flag)
    {
      setFlag(true);
      setLeft('leftTranslate');
      setRight('rightTranslate')
    }
  })
  return (
    <div className='about'>
            <img src={aboutProfile} alt="" className={`dashBoardImage ${flag?left:""}`}/>
            <div className={`about-content ${flag?right:""}`}>
                  <span style={{fontSize:"2.5rem",fontWeight:"600"}}>Myself,</span>
                  <p style={{fontSize:"22px"}}>
                      I'm Sanju , an aspiring engineering student pursuing Btech at Model Engineering College and highly enthusiastic about coding and learning new Technologies.
                  </p>
            </div>
    </div>
  )
}

export default About