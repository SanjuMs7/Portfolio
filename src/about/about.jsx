import './about.css'
import aboutProfile from '../assets/profile-image-about.avif'
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function About() {
  useEffect(() => {
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about", 
        start: "top 80%", 
        end: "top 50%", 
        scrub: 0,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);
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