import React from 'react'
import './skills.css'
import backendIcon from '../assets/backend-dev.png'
import frontEndIcon from '../assets/frontend-dev.png'
import DSAIcon from '../assets/dsa-icon.png'
import gitIcon from '../assets/git-icon.png'
function Skills() {
  return (
    <>
      <div className='skills'>
      <div className="frontend-dev skills-div">
            <div className='icon-div'><img src={frontEndIcon} alt=""/></div>
            <span>FrontEnd Dev</span>
            <p className='skills-info'>
                  Solid foundation in HTML, CSS, and JavaScript, complemented by experience with popular frameworks like React JS. My skill set includes creating responsive and user-friendly web interfaces, ensuring cross-browser compatibility.
            </p>
      </div>
      <div className="dsa skills-div">
            <div className='icon-div'><img src={DSAIcon} alt="" /></div>
            <span>DSA</span>
            <p className='skills-info'>
            Strong understanding basic DSA concepts and is eager to learn more. I love solving problems with code and enjoy diving into advanced DSA topics.My goal is to master complex algorithms and structures to create efficient software solutions.
            </p>
      </div>
      <div className="backend-dev skills-div">
            <div className='icon-div'><img src={backendIcon} alt="" /></div>
            <span>BackEnd Dev</span>
            <p className='skills-info'>
            I am passionate about building scalable server-side applications and eager to deepen my expertise in advanced backend technologies, focusing on optimizing performance and enhancing security in modern tech environments.
            </p>
      </div>
    </div>
    <span>
            I am dedicated to expanding my skills by learning other essential technologies. I strive to master these tools to enhance my productivity and contribute effectively to team projects.
    </span>
    </>
  )
}

export default Skills