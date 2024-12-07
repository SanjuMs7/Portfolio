import './contact.css'
import Insta from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import github from '../assets/GitHub-icon.png'
import EmailIcon from '../assets/Gmail-icon.png'
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Contact() {
      useEffect(() => {
            gsap.to(".contact", {
              scrollTrigger: {
                trigger: ".contact", 
                start: "top 100%", 
                end: "top 50%", 
                scrub: 0,
              },
              opacity: 1,
              y: 0,
              duration: .5,
            });
          }, []);
  return (
    <div className='contact'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:".5rem"}}>
                  <div className='email-icon-div'><img src={EmailIcon} alt="" style={{width:"2rem"}}/></div>
                  <a href="mailto:sanjumlp777@gmail.com" className='emailClass'>sanjumlp777@gmail.com</a>
            </div>
            <div className="contact-links">
                  <a href="https://www.linkedin.com/in/sanjums/" target='_blank'>
                        <div className="contact-icon-div">
                              <img src={linkedin} alt="" />
                        </div>
                  </a>
                  <a href="https://instagram.com/snju_46/" target='_blank'>
                        <div className="contact-icon-div">
                              <img src={Insta} alt="" />
                        </div>
                  </a>
                  <a href="https://github.com/SanjuMs7" target='_blank'>
                        <div className="contact-icon-div">
                              <img src={github} alt="" style={{width:"5rem"}}/>
                        </div>
                  </a>
            </div>
    </div>
  )
}

export default Contact