import React,{useState} from 'react'
import './project.css'
// import videoPreview from '../assets/preview.mp4'
/* 

<video muted autoPlay loop>
      <source src={videoPreview} />    
</video>

*/
import projectPreview from '../assets/project-preview.png'
function Project() {
      const [up,setUp]=useState('');
      const [flag,setFlag]=useState(false);
      window.addEventListener('scroll',()=>{
            console.log(Math.abs(innerHeight-scrollY));
            if(Math.abs(innerHeight-scrollY) > 810 && !flag)
            {
                  setFlag(true);
                  setUp('UpTranslate');
            }
      })
  return (
    <div className='project'>
            <div className={`projects ${flag?up:""}`}>
                  <img src={projectPreview} alt="" />
                  <p className='project-description'>
                        Edusity is a straightforward website crafted using React.js. It features clean design and user-friendly interfaces, showcasing essential information effectively while leveraging React's capabilities for a responsive and intuitive browsing experience.
                  </p>
                  <div className="project-button-div">
                        <a href="https://github.com/SanjuMs7/Edusity" target='_blank'>
                              <button className="project-btn">Github</button>
                        </a>
                        <a href="https://sanjums7.github.io/Edusity/" target='_blank'>
                              <button className="project-btn" style={{backgroundColor:"#2a2a2a",color:"white"}}>Live Preview</button>
                        </a>
                        
                  </div>
            </div>
    </div>
  )
}

export default Project