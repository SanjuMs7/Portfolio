import React, { useRef, useState } from 'react'
import './navbar.css'
import lightMode from '../assets/sun-icon.png'
import darkMode from '../assets/moon-icon.png'
import lineIcon from '../assets/3-lines.png'
import { Link } from 'react-scroll'
// import Skills from '../skills/skills'
function Navbar() {
  const movingIcon=useRef();
  const sunIcon =useRef();
  const moonIcon=useRef();
  const lists=useRef();

  const [light,setLight]=useState(false);
  const changeMode=()=>{
      
      if(!light)
      {
        movingIcon.current.style.transform="translateX(2.1rem)";
        setLight(true);
        sunIcon.current.style.display="flex";
        moonIcon.current.style.display="none";
        setTimeout(() => {
          document.body.style.backgroundColor="white";
          document.body.style.color="black";

          document.querySelector('.projects').style.backgroundImage="linear-gradient(white,white)";
          document.querySelector('.projects').style.boxShadow="0px 0px 6px 0px rgb(31, 31, 31)";

          let array=document.querySelectorAll(".skills-div");
          array.forEach((div)=>{
            div.style.backgroundImage = "linear-gradient(white, white)";
            div.style.color="black";
            div.style.boxShadow="0px 0px 6px 1px rgb(31, 31, 31)";
          });
        },200);
      }
      else
      {
        movingIcon.current.style.transform="translateX(0px)";
        setLight(false);
        sunIcon.current.style.display="none";
        moonIcon.current.style.display="flex";
        setTimeout(() => {
          document.body.style.backgroundColor="#161616";
          document.body.style.color="white";

          document.querySelector('.projects').style.backgroundImage="linear-gradient(to bottom right, #1b1b1b, #131313)";
          document.querySelector('.projects').style.boxShadow="0px 0px 1px 1px rgb(36, 36, 36)";

          let array=document.querySelectorAll(".skills-div");
          array.forEach((div)=>{
            div.style.backgroundImage = "linear-gradient(to bottom right, #1b1b1b, #131313)";
            div.style.color="white";
            div.style.boxShadow="0px 0px 10px 1px rgb(31, 31, 31)";
          });
        },200);
      }
  }

  const [displayed,setMenu]=useState(false);
  const [displayMenu,setMenuClass]=useState('');
  const menu =useRef();

  const showMenu=()=>{
      if(!displayed)
      {
          setMenu(true);
          setMenuClass("display");
          document.body.style.backdropFilter="blur(2rem)";
          menu.current.style.backgroundImage="linear-gradient(rgb(255, 255, 255), rgb(195, 195, 195))";
      }
      else
      {
          setMenu(false);
          setMenuClass("");
          menu.current.style.backgroundImage="linear-gradient(white,white)";
      }
  }
  

  return (
    <>
    <div className='navbar'>
        <p>Sanju M S</p>
        <ul className={`links ${displayed?displayMenu:""}`}>
             
                <div className="links-container">
                    <Link to='dashboard' offset={-200} smooth={true} duration={500}>
                        <li>Home<hr className={`hr-line ${light?"hori-line":"darkmode-hr"}`}/></li>
                    </Link>
                    <Link to='about' smooth={true} offset={-220} duration={800}>
                        <li>About<hr className={`hr-line ${light?"hori-line":"darkmode-hr"}`}/></li>
                    </Link>
                    <Link to='skills' smooth={true} offset={-260} duration={1000}>
                        <li style={{letterSpacing:"1px"}}>Skills<hr className={`hr-line ${light?"hori-line":"darkmode-hr"}`}/></li>
                    </Link>
                    <Link to='projects' smooth={true} offset={-170} duration={1500}>
                        <li>Projects<hr className={`hr-line ${light?"hori-line":"darkmode-hr"}`}/></li>
                    </Link>
                </div>

                <div className="darkMode-btn" onClick={changeMode} title='Dark Mode'>
                    <div className="icon" ref={movingIcon}>
                      <img src={lightMode} alt="" ref={sunIcon} style={{display:"none"}}/>
                      <img src={darkMode} alt="" style={{width:"1rem",display:"flex"}} ref={moonIcon}/>
                    </div>
                </div>
        </ul>
        <div className='menuIcon-div' onClick={showMenu} ref={menu}>
          <img src={lineIcon} alt="" className='menuIcon'/>
        </div>
    </div>
   
    </>
  )
}
export default Navbar