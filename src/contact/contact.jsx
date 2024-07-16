import React from 'react'
import './contact.css'
import Insta from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import github from '../assets/GitHub-icon.png'
import EmailIcon from '../assets/Gmail-icon.png'
function Contact() {
  return (
    <div className='contact'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:".5rem"}}>
                  <div className='email-icon-div'><img src={EmailIcon} alt="" style={{width:"2rem"}}/></div>
                  <span>sanjumlp777@gmail.com</span>
            </div>
            <div className="contact-links">
                  <a href="https://www.linkedin.com/in/sanju-m-s-a8106a258" target='_blank'>
                        <div className="contact-icon-div">
                              <img src={linkedin} alt="" />
                        </div>
                  </a>
                  <a href="https://instagram.com/snju_46?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D" target='_blank'>
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