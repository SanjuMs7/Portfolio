import React from 'react'
import './dashboard.css'
import ProfilePic from '../assets/profile-image.avif'
import { Link } from 'react-scroll'
function Dashboard() {
  return (
    <div className='dashboard'>
      <img src={ProfilePic} alt="" />
      <div className="dashboard-content">
            <span style={{color:"#666666",fontWeight:"600"}}>Hello I'm</span>
            <span style={{fontSize:"48px",fontWeight:"600"}}>Sanju M S</span>
            <span style={{fontSize:"30px", fontWeight:"600",color:"#666666"}}>Frontend Developer</span>
            <div className="button-div">
                  <a href="https://github.com/SanjuMs7/Portfolio" target='_blank'><button>Github Repo</button></a>
                  <Link to='contact' smooth={true} offset={-250}><button style={{backgroundColor:"#2a2a2a",color:"white",border:"none"}}>Contact Info</button></Link>
            </div>
      </div>
    </div>
  )
}

export default Dashboard